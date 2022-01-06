import Image from "next/image";
import profile_pic from "../public/images/ongun_new.jpg";
import { useTheme } from "next-themes";
import {
  FaFileCode,
  FaDownload,
  FaHackerrank,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

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
            src={profile_pic}
            alt="avatar"
            className="mx-auto rounded-full"
            layout="responsive"
            quality="100"
            height="50px"
            width="50px"
          />
        </div>
      </div>

      <h3 className="my-4 text-3xl font-medium font-kaushan">
        {" "}
        <span> Ongun Demirağ </span>{" "}
      </h3>

      <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200">
        <FaFileCode className="w-7 h-7 " />{" "}
        <p className="px-3"> Web & Front-end Developer </p>
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        <GiDiploma className="w-8 h-8" />{" "}
        <p className="px-3"> Certificates & Skills </p>
      </a>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        <FaDownload className="w-7 h-7 " />{" "}
        <p className="px-3"> Download Resume </p>
      </a>

      {/*  Social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <FaGithub className="w-8 h-8 cursor-pointer " />
        </a>
        <a href="">
          <FaLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FaHackerrank className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Adress */}
      <div className="py-4 my-5 bg-gray-200 round dark:bg-dark-200">
        <div className="flex items-center justify-center space-x-2">
          <FaLocationArrow />
          <span> Poland, Europe</span>
        </div>
        <p className="my-2"> ongun.demirag@gmail.com </p>
        <p className="my-2"> +48 731268928 | +90 5310231393</p>
      </div>
      {/* Email button */}
      <button
        className="w-8/12 px-5 py-2 text-white rounded-full cursor-pointer px-15 bg-gradient-to-r from-indigo-purple to-indigo-red "
        onClick={() => window.open("mailto:ongun.demirag@gmail.com")}
      >
        Email me now!
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo-purple to-indigo-red "
      >
        Toggle theme!
      </button>
    </div>
  );
};

export default Sidebar;
