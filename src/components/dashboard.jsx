import React from "react";
import QueryInput from "./queryInput";
import QueryHistory from "./queryHistory";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GITHUB_LINK, LINKEDIN_LINK } from "../constants";
import ResultsDisplay from "./resultsDisplay";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-serif font-extrabold text-center text-[#8046FD]">
        Data Query Dashboard Prototype
      </h1>
      <div className="flex items-center text-center mx-12 md:mx-[30%] lg:mx-[33%]">
        <p className="text-center font-bold text-gray-500 font-serif">
          Developed by Manash Baruah
        </p>
        <span
          className="text-gray-700 px-1 cursor-pointer"
          onClick={() => window.open(GITHUB_LINK, "_blank")}>
          <BsGithub />
        </span>
        <span
          className="text-gray-700 px-1 cursor-pointer"
          onClick={() => window.open(LINKEDIN_LINK, "_blank")}>
          <FaLinkedin />
        </span>
      </div>
      <QueryInput />
      <QueryHistory />
      <ResultsDisplay />
    </div>
  );
};

export default Dashboard;
