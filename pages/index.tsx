import { Container } from "../components/Container";
import { siteMetadata } from "../data/SiteMetadata";
import Image from "next/image";
const IndexPage = () => {
  return (
    <Container showCircles>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              <span>Hola mi nombre es{"  "}</span>
              <br />
              <span className="text-teal-500 dark:text-teal-400">
                <b>Gonzalo Axel </b>
                {"  "}
              </span>
              soy desarrollador
              <br />
              de aplicaciones web
            </h1>
            <div className="order-1 md:order-2">
              <Image
                alt="Braydon Coyer"
                height={160}
                width={160}
                src={siteMetadata.avatarImage}
                placeholder="blur"
                blurDataURL={siteMetadata.avatarImage}
                className="col-span-1 rounded-full"
                layout="fixed"
              />
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:space-x-4"></div>
        </div>

        <div>
          <h2>Me encanta compartir mis conocimientos.</h2>
          <p>
            Echa un vistazo a algunas de mis publicaciones y proyectos mas
            recientes.
          </p>

          <div className="my-16"></div>
          <div className="mt-16"></div>
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
