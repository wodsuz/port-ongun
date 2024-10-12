import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
  FaFileCode,
  FaDownload,
  FaHackerrank,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { GiDiploma } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";

import { DisplayDate } from "./getday";

var random_num = Math.floor(Math.random() * 7);
var img_path = "/images/Propic/ongun" + random_num + ".jpg";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className="p-1 rounded-full bg-gradient-to-tr from-[#7928ca] to-[#ff0080] max-w-[450px] mx-auto">
        <div className="p-1 bg-gray-300 rounded-full dark:bg-dark-200">
          <div className="relative w-full aspect-square">
            <Image
              src={img_path}
              alt="avatar"
              className="rounded-full"
              quality={100}
              fill // Use 'fill' to ensure the image fills the container
              style={{ objectFit: "cover" }} // Ensure the image covers the space
            />
          </div>
        </div>
      </div>

      <h3 className="my-4 text-3xl font-medium font-kaushan">
        <span> Ongun Demirağ </span>{" "}
      </h3>

      <div className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200">
        <FaFileCode className="w-7 h-7 " />{" "}
        <p className="px-3"> Software & Web Developer </p>
      </div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-2 py-1 my-3 transition duration-1000 bg-gray-300 rounded-full dark:bg-dark-200 group "
        href="https://drive.google.com/drive/folders/0B8f0SWVACBExTXBTR2ItTC1CVDQ?resourcekey=0-IbDYaTx566W_UTf5LpbXcQ&usp=sharing"
      >
        <GiDiploma className="w-8 h-8" />
        <div className="px-3">
          Certificates & Skills
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-0.5 bg-primary"></span>
        </div>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-2 py-1 my-3 transition duration-1000 bg-gray-300 rounded-full dark:bg-dark-200 group "
        href="https://drive.google.com/drive/folders/1Wwry3C6cCYPZtnnj1aN2i33l_hSQMB-d?usp=sharing"
      >
        <FaDownload className="w-7 h-7 " />{" "}
        <div className="px-3">
          Download Resume{" "}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-0.5 bg-primary"></span>
        </div>
      </a>

      {/*  Social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-secondary md:w-full ">
        <a
          title="Github"
          href="https://github.com/wodsuz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="w-8 h-8 cursor-pointer hover:text-primary "
            aria-label="github"
          />
        </a>
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/ongun-demirag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="w-8 h-8 cursor-pointer hover:text-primary "
            aria-label="linkedin"
          />
        </a>
        <a
          title="Hackerrank"
          href="https://www.hackerrank.com/wodsuz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank
            className="w-8 h-8 cursor-pointer hover:text-primary "
            aria-label="hackerrank"
          />
        </a>
        <a
          title="Vercel"
          href="https://vercel.com/wodsuz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVercel
            className="w-8 h-8 cursor-pointer hover:text-primary "
            aria-label="Vercel"
          />
        </a>
      </div>
      {/* Adress */}

      <div className="py-4 my-5 bg-gray-200 round dark:bg-dark-200">
        <div className="flex items-center justify-center space-x-2">
          <MdOutlineLocationOn />
          <span> Poland, Europe</span>
        </div>
        <p className="my-2 text-md lg:text-xs 2xl:text-sm">
          {" "}
          ongun@ongundemirag.com
        </p>
        {/*
  <p className="my-2 text-md lg:text-xs 2xl:text-sm">
          +48 572952381 | +90 5310231393
        </p>
          */}
      </div>
      {/* Email and Theme buttons */}
      <button
        aria-label="Email me now!"
        type="button"
        className="w-10/12 px-5 py-2 text-sm text-white rounded-full px-15 bg-gradient-to-r from-indigo-purple to-indigo-red hover:scale-105"
        onClick={() => window.open("mailto:ongun@ongundemirag.com")}
      >
        Email me now!
      </button>
      <button
        aria-label="Toggle theme!"
        type="button"
        onClick={changeTheme}
        className="w-10/12 px-5 py-2 my-2 text-sm text-white rounded-full bg-gradient-to-r from-indigo-purple to-indigo-red hover:scale-105"
      >
        Toggle theme!
      </button>
      <DisplayDate />
    </div>
  );
};

export default Sidebar;
