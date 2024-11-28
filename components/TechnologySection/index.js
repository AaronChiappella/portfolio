import React from "react";
import TecnologyCard from "../TecnologyCard/index";

const TechnologySection = ({title}) => {
  const backendTechnologies = [
    { name: "HTML", logo: "../../public/images/html-logo.png" }, // Ruta desde la carpeta "public"
      ];

  return (
    <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4 ">
      <TecnologyCard title={title} technologies={backendTechnologies} />
    </div>
  );
};

export default TechnologySection;
