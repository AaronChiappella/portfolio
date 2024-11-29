import React from "react";

const WorkCard = ({ img, name, description, onClick, githubLink }) => {
  return (
    <div
      className="overflow-hidden w- rounded-lg p-2 laptop:p-4 first:ml-0 link bg-gray-800/40 backdrop-blur-md "
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "350px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ease-in-out duration-200"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default WorkCard;
