import React from "react";
import { Container } from "../../components/Container";
import Image from "next/image";
import ArticleList from "../../components/ArticleList";
export const recentArticles = [
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1653751930%2F5_basic_angular_testing_tips_banner.jpg&w=750&q=75",
    summary: "summary",
  },
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1651069418%2Ftailwindcssautocompletebanner_itjoyg.png&w=750&q=75",
    summary: "summary",
  },
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1652204795%2Fangular_button_click_banner.jpg&w=750&q=75",
    summary: "summary",
  },
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1653751930%2F5_basic_angular_testing_tips_banner.jpg&w=750&q=75",
    summary: "summary",
  },
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1651069418%2Ftailwindcssautocompletebanner_itjoyg.png&w=750&q=75",
    summary: "summary",
  },
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1652204795%2Fangular_button_click_banner.jpg&w=750&q=75",
    summary: "summary",
  },
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1653751930%2F5_basic_angular_testing_tips_banner.jpg&w=750&q=75",
    summary: "summary",
  },
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1651069418%2Ftailwindcssautocompletebanner_itjoyg.png&w=750&q=75",
    summary: "summary",
  },
  {
    title: "5 Basics Tips for Angular Unit Testing",
    tags: ["React", "Angular"],
    coverImage:
      "https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1652204795%2Fangular_button_click_banner.jpg&w=750&q=75",
    summary: "summary",
  },
];
export default function Proyects() {
  return (
    <Container showCircles title="Projects - Gonzalo Axel">
      <div className="mt-10 mb-10">
        <h1 className=" dark:text-white">
          <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
            Applications & Proyects
          </span>
          <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
            Mis proyectos mas recientes
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-3">
        <div className="col-span-1">
          <h2 className="mt-0 dark:text-white">Fastfood Ilo Delivery </h2>
          <p className="dark:text-slate-400">
            Proyecto de un sistema web completo de venta de comida rapida
            online, integrado con una plataforma de pagos en linea para que los
            clientes puedan pagar en linea y recibir su pedido en su casa.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://fastfoodilo.vercel.app/fastfood"
            target="_blank"
            rel="noreferrer"
          >
            Visit Fastfood Ilo
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-transparent rounded-lg  md:h-[450px] h-auto">
              <Image
                className="absolute"
                objectFit="fill"
                src="https://gonzalo.vercel.app/_next/image?url=%2Fimagesproyect%2Ffastfood-preview.png&w=1920&q=75"
                placeholder="blur"
                blurDataURL="https://gonzalo.vercel.app/_next/image?url=%2Fimagesproyect%2Ffastfood-preview.png&w=1920&q=75"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={"Fast Food Ilo Proyect"}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="dark:text-white">Mis Aplicaciones mas recientes </h2>
        <p className="dark:text-gray-300">
          Echa un vistazo a algunas de mis aplicaciones en construccion y por
          construir.
        </p>
        <ArticleList articles={recentArticles} />
      </div>
    </Container>
  );
}
