import React, { useState } from "react";
import project1 from "../assets/Project3.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project5.png";
import project4 from "../assets/Project4.png";
import project5 from "../assets/Project1.png";

import { AiFillGithub } from "react-icons/ai";

const Projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using react",
    links: {
      site: "https://fs-book-store.vercel.app/",
      github: "https://github.com/zaheerLangrial/FS-BookStore",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "UI for frontend development using react",
    links: {
      site: "https://unsplash-js.vercel.app/",
      github: "https://github.com/zaheerLangrial/Unsplash-Js",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description: "UI for frontend development using react",
    links: {
      site: "#",
      github: "https://github.com/zaheerLangrial/Assignment---1",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "UI for frontend development using react",
    links: {
      site: "https://dice-game-js-sable.vercel.app/",
      github: "https://github.com/zaheerLangrial/Dice-Game-Js",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description: "UI for frontend development using react",
    links: {
      site: "https://exclusive-rtk.vercel.app/",
      github: "https://github.com/zaheerLangrial/Exclusive-RTK",
    },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className=" relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row"
      id="portfolio"
    >
      <div className="glass p-6 w-full border-2 max-w-[600px]">
        <div className=" w-full h-80">
          <img
            src={Projects[currentProject].img}
            alt={Projects[currentProject].title}
            className=" w-full h-full object-cover rounded-lg mb-4"
          />
        </div>
        <p className=" text-gray-200 my-4">{Projects[currentProject].description}</p>
          <div className="flex space-x-4">
            <a target="_blank" href={Projects[currentProject].links.site} className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">View Site</a>
            <a target="_blank" href={Projects[currentProject].links.github} className=" px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300">
              {" "}
              <AiFillGithub />
            </a>
          </div>
      </div>
      
      <ul className=" ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {
          Projects.map((project , index) => {
            return (
              <li key={index} onClick={() => setCurrentProject(index)} className={` cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentProject === index ? "bg-slate-900" : ''}`}>
                {project.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Portfolio;
