import { Container } from "../components/Container";
import { siteMetadata } from "../data/SiteMetadata";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../components/Button";
import ArticleList from "../components/ArticleList";

const recentArticles = [
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

const IndexPage = () => {
  const { push } = useRouter();
  return (
    <Container showCircles>
      <div>
        <div>
          <div className="grid items-center   grid-cols-1 mt-12 text-center  md:justify-between md:mt-20 md:text-left md:grid-cols-6 lg:grid-cols-6">
            <span className="font-bold order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl mt-4 mb-6 mr-3">
              Hola soy {"  "}
              <span className="text-teal-500 dark:text-teal-400">
                <b className="">Gonzalo Axel </b>
                {"  "}
              </span>
              y soy un desarrollador que construye aplicaciones web modernas
            </span>
            <div className="order-1 md:order-2">
              <Image
                alt="Braydon Coyer"
                height={180}
                width={180}
                src={siteMetadata.avatarImage}
                placeholder="blur"
                blurDataURL={siteMetadata.avatarImage}
                className="col-span-1 rounded-full"
                layout="fixed"
              />
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:space-x-4">
            <Button buttonType="primary" onClick={() => push("/blog")}>
              Read the blog
            </Button>
            <Button buttonType="secondary" onClick={() => push("/about")}>
              More about me
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
        <div>
          <h2>Me encanta compartir mis conocimientos.</h2>
          <p>
            Echa un vistazo a algunas de mis publicaciones y proyectos mas
            recientes.
          </p>

          <ArticleList articles={recentArticles} />
          <div className="my-16">
            <Button buttonType="primary" onClick={() => push("/blog")}>
              See all articles
            </Button>
          </div>
          <div className="mt-16"></div>
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
