import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import TecnologyCard from "../components/TecnologyCard";

// Local Data
import data from "../data/portfolio.json";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The Home component represents the main page of the portfolio website.
 * It includes sections for the header, social links, projects, technologies,
 * and an about section. The component utilizes refs to handle scrolling to
 * specific sections smoothly. It also uses the useIsomorphicLayoutEffect hook
 * to apply staggered animations to text elements on initial render.
 *
 * The component fetches data from a local JSON file to populate the page
 * with dynamic content such as header taglines, project details, and an
 * about paragraph. The page also adapts based on the presence of a custom
 * cursor and applies a gradient background.
 */
/******  6b7ea76a-9b0c-4bd4-94cd-989f0beb002b  *******/
export default function Home() {
  // Ref
  const workRef = useRef();
  const techRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const serviciosRef = useRef();
  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleServicesScroll = () => {
    window.scrollTo({
      top: serviciosRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleTecnologiesScroll = () => {
    window.scrollTo({
      top: techRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleTecnologiesScroll={handleTecnologiesScroll}
          handleServicesScroll={handleServicesScroll}
        />
        <div className="laptop:mt-0 mt-10 flex flex-col laptop:flex-row items-center overflow-hidden">
          <div className="w-full laptop:w-3/5">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-80%"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
            </div>
            <Socials className="mt-2 laptop:mt-5" />
          </div>

          {/* Contenedor para la imagen de perfil */}
          <div className="w-full laptop:w-2/5 flex justify-center mt-4 laptop:mt-0">
            <img
              src="https://res.cloudinary.com/dcfsei6dx/image/upload/v1732845055/profile_fcqh1u.jpg"
              alt="Foto de perfil"
              className="w-80 h-80 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="mt-40 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-4xl font-extrabold text-center text-gray-400 mt-8 mb-4">
            Proyectos y trabajos
          </h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4 ">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0 " ref={techRef}>
          <h1 className="text-4xl font-extrabold text-center text-gray-400 mt-8 mb-4 tablet:m-10 text-2xl text-bold text-center ">
            Tecnologias
          </h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            <TecnologyCard
              title="Backend"
              technologies={[
                "https://www.svgrepo.com/show/521273/c-sharp-16.svg",
                "https://www.svgrepo.com/show/376369/dotnet.svg",
                "https://www.svgrepo.com/show/452075/node-js.svg",
                "https://www.svgrepo.com/show/373965/pgsql.svg",
                "https://www.svgrepo.com/show/508811/dbs-sqlserver.svg",
                "https://www.svgrepo.com/show/374016/python.svg",
                "https://www.svgrepo.com/show/373845/mongo.svg",
                "https://www.svgrepo.com/show/374005/prolog.svg",
              ]}
            />

            <TecnologyCard
              title="FrontEnd"
              technologies={[
                "https://www.svgrepo.com/show/452228/html-5.svg",
                "https://www.svgrepo.com/show/452185/css-3.svg",
                "https://www.svgrepo.com/show/373705/js-official.svg",
                "https://www.svgrepo.com/show/452092/react.svg",
                "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
                "https://www.svgrepo.com/show/353855/handlebars.svg",
                "https://www.svgrepo.com/show/374118/tailwind.svg",
              ]}
            ></TecnologyCard>
          </div>
        </div>
        <div
          className="mt-4 laptop:mt-20 p-2 laptop:p-0 flex justify-center"
          ref={aboutRef}
        >
          <div className="w-full laptop:w-4/5">
            <h1 className="tablet:m-10 text-2xl font-bold text-pretty text-4xl font-extrabold text-center text-gray-400 mt-8 mb-4">
              About
            </h1>
            <p className="tablet:m-10 mt-2 text laptop:text-2xl text-pretty">
              {data.aboutpara}
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-4 laptop:mt-10 p-2 laptop:p-0 flex justify-center"
        ref={serviciosRef}
      >
        <div className="w-full laptop:w-3/4 pb-40">
          <h1 className="tablet:m-10 text-2xl font-bold text-center text-4xl font-extrabold text-center text-gray-400 mt-8 mb-4">
            Servicios
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className=" border border-gray-300 rounded-lg p-4 shadow-md">
              <h2 className="text-2xl  font-bold mb-2">Desarrollo Web</h2>
              <p
              className="text-xl text-gray-300">
                Creación de sitios web dinámicos y aplicaciones interactivas
                para satisfacer las necesidades empresariales.
              </p>
            </div>

            <div className=" border border-gray-300 rounded-lg p-4 shadow-md">
              <h2 className="text-2xl font-bold mb-2">Diseño de Sistemas</h2>
              <p
               className="text-xl text-gray-300 ">
                Diseño y desarrollo de sistemas de gestión y herramientas
                personalizadas para facilitar procesos empresariales.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 shadow-md">
              <h2 className="text-2xl font-bold mb-2">Soporte Técnico</h2>
              <p
               className="text-xl text-gray-300">
                Asistencia técnica y mantenimiento para asegurar la estabilidad
                y el funcionamiento óptimo de tus proyectos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
