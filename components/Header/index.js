import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, handleTecnologiesScroll, handleServicesScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0; // Variable para almacenar la última posición de desplazamiento

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si el desplazamiento va hacia abajo, ocultar la navbar
        setShowNavbar(false);
      } else {
        // Si el desplazamiento va hacia arriba, mostrar la navbar
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}
              </h1>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleTecnologiesScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:hello@chetanverma.com")
                      }
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:aaronchiappella@gmail.com")}
                  >
                    Enviar mail
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:aaronchiappella@gmail.com")}
                  >
                    Enviar mail
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-5 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex ${
          showNavbar ? "" : "hidden"
        } ${
          theme === "light" ? "bg-white " : "bg"
        }  border border-transparent`} // Aplica la clase "hidden" cuando showNavbar es falso
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Proyectos</Button>
            <Button onClick={handleTecnologiesScroll}>Tecnologias</Button>
            <Button onClick={handleAboutScroll}>Sobre Mi</Button>
            <Button onClick={handleServicesScroll}>Servicios</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:aaronchiappella@gmail.com")}>
              Enviar mail
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:aaronchiappella@gmail.com")}>
              Contact
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
