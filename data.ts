import { RiComputerLine, RiTeamLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IService, ISkill } from "./type";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiTailwindcss,
  SiVisualstudio,
  SiFirefoxbrowser,
  SiCkeditor4,
  SiEclipseide,
  SiAutodesk,
  SiSelenium,
} from "react-icons/si";
import { icons } from "react-icons/lib";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Front-end Development",
    about:
      "Abke to build a user-friendly, responsive and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle automation, web-testing, web scrapping with <b> Python, Selenium </b> and other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Integration",
    about:
      "Experience with browser APIs and optimising front end performance.Work closely with backend developers to maximize retriving data proces from API's.",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b>  and <b>Coursera</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Interractive user interface design using <b>Qt editor</b>  and  <b>Kiyvmd</b>. Moreover mock-up designs preparation with <b> Figma </b> and <b> Frammer </b> ",
  },
  {
    Icon: CgPerformance,
    title: "Performance Improvement",
    about:
      "Perform regular site maintenance and optimization of web pages for maximum speed, scalability, and the best user experience",
  },
  {
    Icon: HiOutlineDocumentText,
    title: "Technical Documentation preparation",
    about:
      "Produce documentation for the work done so support and other members of the team understand the changes to the product",
  },
  {
    Icon: RiTeamLine,
    title: "Work in team / scrum & gti enviroment",
    about:
      "Familiar scrum concepts and had experience working in a team enviorement.Native in English, collaborative spirit and the ability to work effectively with a team ",
  },
];

export const languages: ISkill[] = [
  {
    name: "Python (KivyMd,Keras)",
    level: "80%",
    Icon: SiPython,
  },
  {
    name: "Selenium (webdriver)",
    level: "90%",
    Icon: SiSelenium,
  },
  {
    name: "Java Script (Vanilla js)",
    level: "80%",
    Icon: SiJavascript,
  },
  {
    name: "React.js",
    level: "60%",
    Icon: SiReact,
  },
  {
    name: "Next.js",
    level: "60%",
    Icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    level: "60%",
    Icon: SiNodedotjs,
  },
  {
    name: "TypeScript",
    level: "60%",
    Icon: SiTypescript,
  },
  {
    name: "HTML5",
    level: "90%",
    Icon: SiHtml5,
  },
  {
    name: "CS3",
    level: "90%",
    Icon: SiCss3,
  },
  {
    name: "Bootstrap",
    level: "90%",
    Icon: SiBootstrap,
  },
  {
    name: "SASS & SCSS",
    level: "70%",
    Icon: SiSass,
  },
  {
    name: "Tailwind CSS",
    level: "50%",
    Icon: SiTailwindcss,
  },
];

export const tools: ISkill[] = [
  {
    name: "VS Code",
    level: "80%",
    Icon: SiVisualstudio,
  },
  {
    name: "Browser Console",
    level: "80%",
    Icon: SiFirefoxbrowser,
  },
  {
    name: "MATLAB",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "QT Editor",
    level: "50%",
    Icon: SiCkeditor4,
  },
  {
    name: "Eclipse IDE",
    level: "50%",
    Icon: SiEclipseide,
  },
  {
    name: "Auto CAD",
    level: "50%",
    Icon: SiAutodesk,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/Projectshots/blink.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["React"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Algorithm Visualizer",
    image_path: "/images/Projectshots/blink.jpg",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["React"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id: 3,
    name: "Dev Talks",
    image_path: "/images/Projectshots/blink.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["Next", "Python", "UI"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id: 4,
    name: "Realtime Chat App",
    image_path: "/images/Projectshots/blink.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["React", "Python"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 5,
    name: "Tweeter Clone",
    image_path: "/images/Projectshots/blink.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["Python", "React"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id: 6,
    name: "Color Classification using tf.js",
    image_path: "/images/Projectshots/blink.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["Python"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 7,
    name: "YouTube using YouTube ",
    image_path: "/images/Projectshots/blink.jpg",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["Python"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 8,
    name: "Football App",
    image_path: "/images/Projectshots/blink.jpg",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["Python"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
