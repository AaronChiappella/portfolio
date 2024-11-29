import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>


<a href="https://drive.google.com/uc?export=download&id=1tKLlLk5jn2uO1EkJLlFVhkGATMJdcSAM" download className="flex items-center rounded-full border border-white bg-transparent px-4 py-2 text-white hover:bg-white hover:text-black">
Descargar CV
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5 mr-2">
    <path   d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4" />
  </svg>
 
</a>


     
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
