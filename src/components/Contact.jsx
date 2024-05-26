import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className=" px-6 max-w-[1000px] mx-auto glass  grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <ul className=" my-auto pr-6">
        <li className="flex">
          <AiFillLinkedin className=" w-[70px] h-auto text-gray-300" />
          <div className="m-5">
            <h3 className="text-xl font-bold text-gray-200">Contact</h3>
            <p className="text-gray-400">Mobile: xxx</p>
            <p className="text-gray-400">Email: xxx</p>
          </div>
        </li>
        <li className="flex">
          <AiFillGithub className="w-[70px] h-auto text-gray-300" />
          <div className="m-5">
            <h3 className="text-xl font-bold text-gray-200">Working Hours</h3>
            <p className="text-gray-400">Mon-Fri: 10am-8pm</p>
          </div>
        </li>
      </ul>

      <form action="https://getform.io/f/eapdejka" method="POST" className=" max-w-6xl p-5 md:p-12" id="form">
        <input
          type="text"
          id="name"
          placeholder="Your name ...."
          name="name"
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <input
          type="email"
          id="email"
          placeholder="Your email ..."
          name="name"
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <textarea
          name="textarea"
          id="textarea"
          cols={30}
          rows={4}
          placeholder="Your message ..."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <button
          type="submit"
          className=" w-full py-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#50a7c7] via-[#1f7c89] to-[#3d6ca4]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
