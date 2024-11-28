import React from "react";

const TecnologyCard = ({ title,backendTecnologies}) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link bg-gray-800/40 backdrop-blur-md"
      
    >
        <h1 className="text-center"> {title} </h1>
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "350px" }}
      >
        
      </div>
    </div>
  );
};

export default TecnologyCard;
