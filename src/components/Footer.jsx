import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" max-w-[1300px] mx-auto flex justify-between py-3 px-3 md:px-10 md:py-10 text-sm md:text-lg mt-12">
      <h3 className=" text-2xl text-gray-200 font-semibold">Zaheer</h3>

      <div className="flex flex-row gap-6 text-gray-400 text-4xl">
        <a>
          <FaGithubSquare />
        </a>
        <a>
          <FaInstagram />
        </a>
      </div>
      <p className=" text-gray-400">@ 2024 Zaheer</p>
    </div>
  );
};

export default Footer;
