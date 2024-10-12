import Image from "next/image";
import { useTheme } from "next-themes";
import {
  FaFileCode,
  FaDownload,
  FaHackerrank,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { SiVercel } from "react-icons/si";
import { DisplayDate, Getday } from "./getday";

var random_num = Math.floor(Math.random() * 7);
var img_path = "/images/Propic/ongun" + random_num + ".jpg";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className="p-1 rounded-full bg-gradient-to-tr from-[#7928ca] to-[#ff0080]">
        <div className="p-1 bg-gray-300 rounded-full dark:bg-dark-200">
          <Image
            src={img_path}
            alt="avatar"
            className="mx-auto rounded-full"
            layout="responsive"
            quality="100"
            height="50px"
            width="50px"
            objectFit="cover"
          />
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
        rel="noreferrer"
        className="flex items-center justify-center px-2 py-1 my-3 transition duration-1000 bg-gray-300 rounded-full dark:bg-dark-200 group "
        href="https://drive.google.com/drive/folders/0B8f0SWVACBExTXBTR2ItTC1CVDQ?resourcekey=0-IbDYaTx566W_UTf5LpbXcQ&usp=sharing"
      >
        <GiDiploma className="w-8 h-8" />{" "}
        <div className="px-3">
          {" "}
          Certificates & Skills
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-0.5 bg-primary"></span>
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
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
        <a href="https://github.com/wodsuz" target="_blank" rel="noreferrer">
          <FaGithub
            className="w-8 h-8 cursor-pointer hover:text-primary "
            aria-label="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ongun-demirag"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            className="w-8 h-8 cursor-pointer hover:text-primary "
            aria-label="linkedin"
          />
        </a>
        <a
          href="https://www.hackerrank.com/wodsuz"
          target="_blank"
          rel="noreferrer"
        >
          <FaHackerrank
            className="w-8 h-8 cursor-pointer hover:text-primary "
            aria-label="hackerrank"
          />
        </a>
        <a href="https://vercel.com/wodsuz" target="_blank" rel="noreferrer">
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
          ongun.demirag@gmail.com{" "}
        </p>
        {/*
  <p className="my-2 text-md lg:text-xs 2xl:text-sm">
          +48 572952381 | +90 5310231393
        </p>
          */}
      </div>
      {/* Email and Theme buttons */}
      <button
        className="w-8/12 px-5 py-2 text-white rounded-full px-15 bg-gradient-to-r from-indigo-purple to-indigo-red hover:scale-105"
        onClick={() => window.open("mailto:ongun.demirag@gmail.com")}
      >
        Email me now!
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo-purple to-indigo-red hover:scale-105"
      >
        Toggle theme!
      </button>
      <DisplayDate />
    </div>
  );
};

export default Sidebar;
