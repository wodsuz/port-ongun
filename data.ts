import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IService, ISkill } from "./type";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    name: "Python (Selenium,KivyMd)",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Java Script (Vanilla js)",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Next.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Node.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML5",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "CS3",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "SASS & SCSS",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Tailwind CSS",
    level: "50%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "VS Code",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Browser Console",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "MATLAB",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "QT Editor",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Eclipse IDE",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Auto CAD",
    level: "50%",
    Icon: BsCircleFill,
  },
];
