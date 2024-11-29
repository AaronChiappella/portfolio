import React from "react";

const TecnologyCard = ({ title, technologies = [] }) => {
  return (
    <div
      className="overflow-hidden rounded-lg laptop:p-4 first:ml-0 link bg-gray-800/40 backdrop-blur-md"
    >
      <h1 className="text-center"> {title} </h1>
      <div
        className="grid grid-cols-4 gap-2"
        style={{ height: "350px", overflowY: "auto" }}
      >
        {technologies.map((relativePath, index) => (
          <div
            key={index}
            className="flex items-center justify-center "
            style={{ aspectRatio: "1 / 1" }}
          >
            <img
              src={relativePath}
              alt={`Technology ${index + 1}`}
              className="object-contain w-3/4 h-3/4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TecnologyCard;
