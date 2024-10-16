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
  SiHubspot,
  SiAsana,
  SiJira,
  SiSlack,
  SiMongodb,
  SiExpress,
  SiEthereum,
  SiBlockchaindotcom,
  SiScrumalliance,
  SiAntdesign,
} from "react-icons/si";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Front-end Development",
    about:
      "Able to build a user-friendly, responsive and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
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
      "Experience with browser APIs and optimizing front end performance. Work closely with backend developers to maximize retrieving data process from API's.",
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
      "Interactive user interface design using <b>Qt editor</b> and  <b>Kiyvmd</b>. Moreover, mock-up designs preparation with <b> Figma </b>and<b> Frammer </b> ",
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
      "Familiar scrum concepts and had experience working in a team environment. Native in English, collaborative spirit and the ability to work effectively with a team ",
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
  {
    name: "Express.js",
    level: "50%",
    Icon: SiExpress,
  },

  {
    name: "Ant Design",
    level: "80%",
    Icon: SiAntdesign,
  },
  {
    name: "MongoDb",
    level: "40%",
    Icon: SiMongodb,
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
  {
    name: "Hubspot",
    level: "80%",
    Icon: SiHubspot,
  },

  {
    name: "Asana",
    level: "80%",
    Icon: SiAsana,
  },

  {
    name: "Jira",
    level: "50%",
    Icon: SiJira,
  },

  {
    name: "Slack",
    level: "90%",
    Icon: SiSlack,
  },

  {
    name: "Scrum",
    level: "60%",
    Icon: SiScrumalliance,
  },
  {
    name: "Blockchain",
    level: "70%",
    Icon: SiBlockchaindotcom,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Personal website",
    description:
      "Personal portfolio website for Ongun Demirag. With Next.js, TypeScript and Tailwind.",
    image_path: "/images/Projectshots/ongundemirag.png",
    deployed_url: "https:/www.ongundemirag.com",
    github_url: "https://github.com/wodsuz/port-ongun",
    category: ["React", "Next", "UI", "Tailwind CSS", "TypeScript"],
    key_techs: ["React", "Next.js", "UI", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    name: "Engineering company website",
    image_path: "/images/Projectshots/arimedNew.png",
    deployed_url: "https://arimed.vercel.app/",
    github_url: "",
    category: ["Next", "Node", "Tailwind CSS", "UI", "TypeScript"],
    description: "Engineering Company website with contanct information",
    key_techs: ["HTML", "CSS", "Bootstrap", "Chart.jd"],
  },

  {
    id: 3,

    name: "Sales & Food company website",
    image_path: "/images/Projectshots/kuzeyindsite.png",
    deployed_url: "http://www.kuzeyind.com/",
    github_url: "",
    category: ["Next", "Node", "Tailwind CSS", "UI", "TypeScript"],
    description:
      "Dynamic, responsive and fast Food and export company website with contanct information",
    key_techs: ["HTML", "CSS", "Bootstrap", "Chart.jd"],
  },

  {
    id: 4,
    name: "Fungi todolist",
    image_path: "/images/Projectshots/todolist.png",
    deployed_url: "https://wodsuz.github.io/Fungi-todolist/",
    github_url: "https://github.com/wodsuz/Fungi-todolist",
    category: ["React", "Vanilla(ES6)", "Bootstrap"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: [
      "React",
      "Bootstrap",
      "Vanilla",
      "Javascript",
      "Gradient-color",
      "Multiple Langues",
      "DOM",
      "Multiple fonts",
    ],
  },

  {
    id: 5,
    name: "React Rating",
    image_path: "/images/Projectshots/starrating.png",
    deployed_url: "https://wodsuz.github.io/React-Rating-Design/",
    github_url: "https://github.com/wodsuz/React-Rating-Design",
    category: ["React", "SASS", "UI", "Bootstrap"],
    description:
      "React app where user can select star and numerous different ratings. ",
    key_techs: ["React", "SASS", "BEM", "Rating", "Mobile-Friendly"],
  },

  {
    id: 6,
    name: "Ecommerce website (ongoing)",
    image_path: "/images/Projectshots/ecommerce.png",
    deployed_url: "",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["React", "API", "SASS", "UI"],
    description: "An ecommerce website template made with react and sass",
    key_techs: ["React", "SASS", "Responsive", "Asynch. images"],
  },
  {
    id: 7,
    name: "DancingLens Photography Portfolio (ongoing)",
    image_path: "/images/Projectshots/dancinglensportf.png",
    deployed_url: "https://wodsuz.github.io/DancingwiththeLens/#page-1",
    github_url: "https://github.com/wodsuz/DancingwiththeLens",
    category: ["React", "SASS", "Bootstrap"],
    description:
      "Fully responvie animative dynamic photography portfolio website with contact form.",
    key_techs: [
      "React",
      "Animation",
      "Minimalistic",
      "Multiple pages",
      "Sass",
      "random coloring",
    ],
  },
  {
    id: 8,
    name: "Rock - Paper - Scissors game",
    image_path: "/images/Projectshots/rpsgame.png",
    deployed_url: "https://wodsuz.github.io/RockPaperScissors/",
    github_url: "https://github.com/wodsuz/RockPaperScissors",
    category: ["React"],
    description:
      "Simple rock paper scissors game playable against computer with multiple options and preferances ",
    key_techs: ["HTML", "CSS", "Bootstrap", "Chart.jd"],
  },
  {
    id: 9,
    name: "Movie-App",
    image_path: "/images/Projectshots/moviepnew.png",
    deployed_url: "https://wodsuz.github.io/movie-app/",
    github_url: "https://github.com/wodsuz/movie-app",
    category: ["React", "SASS", "UI", "API"],
    description:
      "TicTacToe application made by Ongun Demirag - www.ongundemirag.com",
    key_techs: [
      "React",
      "API",
      "Framer Motion",
      "SCSS",
      "Responsive",
      "Multi-page",
    ],
  },
  {
    id: 10,
    name: "Tic Tac Toe Game",
    image_path: "/images/Projectshots/tictactoegame.png",
    deployed_url: "https://tic-tac-toe-gamma-one.vercel.app/",
    github_url: "https://github.com/wodsuz/Tic-Tac-Toe-game-",
    category: ["Next", "SASS", "TypeScript"],
    description:
      "TicTacToe application made by Ongun Demirag - www.ongundemirag.com",
    key_techs: ["React", "firebase", "Framer Motion"],
  },
  {
    id: 11,
    name: "Ongundemirag Automated bots Python - Selenium display page",
    image_path: "/images/Projectshots/automatedbots.png",
    deployed_url: "https://www.automatedbots.tk/",
    github_url: "",
    category: ["Next", "Node", "Tailwind CSS", "UI", "TypeScript"],
    description:
      "Dynamic, responsive and fast Food and export company website with contanct information",
    key_techs: ["HTML", "CSS", "Bootstrap", "Chart.jd"],
  },
  {
    id: 12,
    name: "Consultancy company website (ongoing)",
    image_path: "/images/Projectshots/sarpconsult.png",
    deployed_url: "https://www.sarpajans.com.tr/",
    github_url: "",
    category: ["Next", "Node", "Tailwind CSS", "UI", "TypeScript"],
    description:
      "Dynamic, responsive and fast Consultancy company website with contanct information",
    key_techs: ["HTML", "CSS", "Bootstrap", "Chart.jd"],
  },
  // bots
  {
    id: 13,
    name: "Python selenium Pionex crypto bot",
    image_path: "/images/Projectshots/cryp1.png",
    deployed_url: "https://www.sarpajans.com.tr/",
    github_url: "",
    category: ["Python", "UI", "KivyMD", "Selenium", "Google Solutions"],
    description:
      "A bot to retrieve current crypto prices and display them on Google Sheets",
    key_techs: [
      "Python",
      "Selenium",
      "Kivymd",
      "Google Sheets export",
      "Google-sites host",
    ],
  },
  {
    id: 14,
    name: "Python selenium Linkedin easy apply bot",
    image_path: "/images/Projectshots/linkedinbot.png",
    deployed_url: "https://www.automatedbots.tk/linkedln/easyapplyjobs",
    github_url: "https://github.com/wodsuz/LinkedinEasyApplyJobsBot",
    category: ["Python", "UI", "KivyMD", "Selenium", "Google Solutions"],
    description: "A bot to automatically apply Linkedin jobs.",
    key_techs: [
      "Python",
      "Selenium",
      "Kivymd",
      "Google Sheets export",
      "Google-sites host",
    ],
  },
  {
    id: 15,
    name: "Python selenium Instagram easy apply bot",
    image_path: "/images/Projectshots/EmbeddedImage.png",
    deployed_url: "https://www.automatedbots.tk/insta",
    github_url: "",
    category: ["Python", "UI", "KivyMD", "Selenium", "Google Solutions"],
    description:
      "A bot to automatically perform tasks on Instagram. Like follow, like, message, or group like/follow etc.",
    key_techs: [
      "Python",
      "Selenium",
      "Kivymd",
      "Google Sheets export",
      "Google-sites host",
    ],
  },
];
