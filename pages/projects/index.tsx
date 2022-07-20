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
          <h2 className="mt-0 dark:text-white">CSS Art Challenge</h2>
          <p className="dark:text-slate-400">
            I created CSS Art Challenge to help people discover that CSS can be
            fun and more than just creating basic layouts by competing in
            monthly challenges and winning prizes!
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Visit CSS Art Challenge
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-transparent rounded-lg  md:h-[450px] h-auto">
              <Image
                className="absolute left-[200px]"
                objectFit="fill"
                src="https://res.cloudinary.com/braydoncoyer/image/upload/v1646346494/mbpro_css_art_challenge_thh7yw.png"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1646346494/mbpro_css_art_challenge_thh7yw.png"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={"Bundle, LLC on a Macbook Pro"}
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
