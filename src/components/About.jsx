import React from "react";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-2 md:gap-6 place-items-center"
      id="about"
    >
      <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
        <DiHtml5 className=" text-orange-600" />
        <DiCss3 className=" text-blue-600" />
        <DiSass className=" text-pink-600" />
        <DiBootstrap className=" text-purple-600" />
        <DiJavascript1 className=" text-yellow-600" />
        <DiReact className=" text-blue-600" />
        <DiNodejsSmall className=" text-green-600" />
      </div>

      <div className="relative group">
        <div className=" w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition  duration-300"></div>
        <div className="relative w-full bg-white bg-orange-10 backdrop-blur-lg rounded-lg">
          <img
            src={project1}
            alt="Project 1"
            className=" rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className=" text-gray-200 text-3xl font-bold mb-4">Skills</h2>
        <p className=" text-gray-300 mb-4">
          As a passionate web front-end developer with over 2 years experience,
          I have a proven track record of creating visually stunning and
          responsive websites.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className=" text-orange-600" />
          <DiCss3 className=" text-blue-600" />
          <DiSass className=" text-pink-600" />
          <DiBootstrap className=" text-purple-600" />
          <DiJavascript1 className=" text-yellow-600" />
          <DiReact className=" text-blue-600" />
          <DiNodejsSmall className=" text-green-600" />
        </div>
      </div>

      <div className="p-6">
        <h2 className=" text-gray-200 text-3xl font-bold mb-4">
          Front-end Experience
        </h2>
        <p className=" text-gray-300 mb-4">
          Experienced in creating modern, responsive web application using the
          latest frontend technologies.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className=" text-orange-600" />
          <DiCss3 className=" text-blue-600" />
          <DiSass className=" text-pink-600" />
          <DiBootstrap className=" text-purple-600" />
          <DiJavascript1 className=" text-yellow-600" />
          <DiReact className=" text-blue-600" />
        </div>
      </div>

      <div className="relative group">
        <div className=" w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition  duration-300"></div>
        <div className="relative w-full bg-white bg-orange-10 backdrop-blur-lg rounded-lg">
          <img
            src={project2}
            alt="Project 2"
            className=" rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="relative group">
        <div className=" w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition  duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-orange-10 backdrop-blur-lg rounded-lg">
          <img
            src={project3}
            alt="Project 3"
            className=" rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className=" text-gray-200 text-3xl font-bold mb-4">
          Full Stack Experience
        </h2>
        <p className=" text-gray-300 mb-4">
          Skilled in developing end-t0-end solution fullstack technologies.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiNodejsSmall className="text-green-600" />
          <DiMongodb className="text-green-600" />
          <DiReact className="text-blue-600" />
          <DiGithubBadge className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default About;
