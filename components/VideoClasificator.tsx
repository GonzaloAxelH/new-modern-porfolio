import React, { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

export default function VideoClasificator() {
  const [resultado, setResultado] = useState("");
  const [tamano] = useState(400);
  const [currentStream, setCurrentStream] = useState(null);
  const [facingMode, setFacingMode] = useState("user");
  const [modelo, setModelo] = useState(null);

  const refCanvas = useRef(null);
  const refVideo = useRef(null);
  const refCanvas2 = useRef(null);

  const video = refVideo.current;
  const canvas = refCanvas.current;
  const otroCanvas = refCanvas2.current;
  useEffect(() => {
    const loadModel = async () => {
      setModelo(await tf.loadLayersModel("/model.json"));
    };
    loadModel();
    mostrarCamara();
  });

  function mostrarCamara() {
    var opciones = {
      audio: false,
      video: {
        width: tamano,
        height: tamano,
      },
    };

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(opciones)
        .then(function (stream) {
          setCurrentStream(stream);
          video.srcObject = currentStream;
          procesarCamara();
          predecir();
        })
        .catch(function (err) {
          alert("No se pudo utilizar la camara :(");
          console.log(err);
          alert(err);
        });
    } else {
      alert("No existe la funcion getUserMedia");
    }
  }

  function cambiarCamara() {
    if (currentStream) {
      currentStream.getTracks().forEach((track) => {
        track.stop();
      });
    }

    setFacingMode(facingMode == "user" ? "environment" : "user");

    var opciones = {
      audio: false,
      video: {
        facingMode: facingMode,
        width: tamano,
        height: tamano,
      },
    };

    navigator.mediaDevices
      .getUserMedia(opciones)
      .then(function (stream) {
        setCurrentStream(stream);
        video.srcObject = currentStream;
      })
      .catch(function (err) {
        console.log("Oops, hubo un error", err);
      });
  }

  function procesarCamara() {
    canvas.drawImage(video, 0, 0, tamano, tamano, 0, 0, tamano, tamano);
    setTimeout(procesarCamara, 20);
  }

  function predecir() {
    if (modelo != null) {
      resample_single(canvas, 100, 100, otroCanvas);

      //Hacer la predicción
      var ctx2 = otroCanvas.getContext("2d");
      var imgData = ctx2.getImageData(0, 0, 100, 100);

      var arr = [];
      var arr100 = [];

      for (var p = 0; p < imgData.data.length; p += 4) {
        var rojo = imgData.data[p] / 255;
        var verde = imgData.data[p + 1] / 255;
        var azul = imgData.data[p + 2] / 255;

        var gris = (rojo + verde + azul) / 3;

        arr100.push([gris]);
        if (arr100.length == 100) {
          arr.push(arr100);
          arr100 = [];
        }
      }

      arr = [arr];

      var tensor = tf.tensor4d(arr);
      var resultado = modelo.predict(tensor).dataSync();

      var respuesta;
      if (resultado <= 0.5) {
        respuesta = "Palta Malograda";
      } else {
        respuesta = "Palta Madura ";
      }

      setResultado(respuesta);
    }

    setTimeout(predecir, 150);
  }

  /**
   * Hermite resize - fast image resize/resample using Hermite filter. 1 cpu version!
   *
   * @param {HtmlElement} canvas
   * @param {int} width
   * @param {int} height
   * @param {boolean} resize_canvas if true, canvas will be resized. Optional.
   * Cambiado por RT, resize canvas ahora es donde se pone el chiqitillllllo
   */
  function resample_single(canvas, width, height, resize_canvas) {
    var width_source = canvas.width;
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);

    var ratio_w = width_source / width;
    var ratio_h = height_source / height;
    var ratio_w_half = Math.ceil(ratio_w / 2);
    var ratio_h_half = Math.ceil(ratio_h / 2);

    var ctx = canvas.getContext("2d");
    var ctx2 = resize_canvas.getContext("2d");
    var img = ctx.getImageData(0, 0, width_source, height_source);
    var img2 = ctx2.createImageData(width, height);
    var data = img.data;
    var data2 = img2.data;

    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
        var x2 = (i + j * width) * 4;
        var weight = 0;
        var weights = 0;
        var weights_alpha = 0;
        var gx_r = 0;
        var gx_g = 0;
        var gx_b = 0;
        var gx_a = 0;
        var center_y = (j + 0.5) * ratio_h;
        var yy_start = Math.floor(j * ratio_h);
        var yy_stop = Math.ceil((j + 1) * ratio_h);
        for (var yy = yy_start; yy < yy_stop; yy++) {
          var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
          var center_x = (i + 0.5) * ratio_w;
          var w0 = dy * dy; //pre-calc part of w
          var xx_start = Math.floor(i * ratio_w);
          var xx_stop = Math.ceil((i + 1) * ratio_w);
          for (var xx = xx_start; xx < xx_stop; xx++) {
            var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
            var w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              //pixel too far
              continue;
            }
            //hermite filter
            weight = 2 * w * w * w - 3 * w * w + 1;
            var pos_x = 4 * (xx + yy * width_source);
            //alpha
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            //colors
            if (data[pos_x + 3] < 255)
              weight = (weight * data[pos_x + 3]) / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }

    ctx2.putImageData(img2, 0, 0);
  }

  return (
    <div>
      <canvas ref={refCanvas} />
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out :
              <br className="hidden lg:inline-block" />
              {resultado || "loading ..."}
            </h1>
            <p className="mb-8 leading-relaxed"></p>
            <div className="flex justify-center">
              <button
                onClick={() => cambiarCamara()}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Cambiar camara
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              id="video"
              playsInline
              autoPlay
              style={{ width: "1px" }}
            ></video>
            <canvas
              ref={refCanvas}
              width="400"
              height="400"
              style={{ maxWidth: "100%" }}
            ></canvas>
            <canvas
              ref={refCanvas2}
              width="150"
              height="150"
              style={{ display: "none" }}
            ></canvas>
          </div>
        </div>
      </section>
    </div>
  );
}
