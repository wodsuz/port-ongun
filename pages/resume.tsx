import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routerAnimation } from "../animations";
import Head from "next/head";
import { Getday } from "../components/getday";

const resume = () => {
  return (
    <div className="px-6 py-2">
      <Getday />
      {/*  education & experience  */}

      <div className="grid gap-2 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-1 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-1 text-lg font-semibold">
              MSc Mechatronics, Robotics and Automation engineering{" "}
            </h5>
            <p className="text-base font-normal">
              {" "}
              Poznan University of Technology, Poland{" "}
            </p>
            <h5 className="my-1 text-lg font-semibold">
              BSc Electrical and Electronics engineering{" "}
            </h5>
            <p className="text-base font-normal">
              University of Turkish Education Association, Turkey{" "}
            </p>
            <h5 className="my-1 text-lg font-semibold">Erasmus Semester </h5>
            <p className="text-base font-normal">
              Lodz University of Technology, Poland{" "}
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-1 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-1 text-lg font-bold">
              Remote web and application engineer, freelancer{" "}
            </h5>
            <p className="text-base font-semibold"> From 2018 </p>
            <p className="my-1">Mobile responsive web applications </p>
            <h5 className="my-1 text-lg font-bold">
              Software & Electrical engineering, Arimed, Turkey{" "}
            </h5>
            <p className="text-base font-semibold">07/2017 - 03/2018 </p>
            <p className="my-1">
              UI design, CAD software scripts with ECMAScript, Converting
              electrical Eng. formulas into add-ons and computer functions.{" "}
            </p>
            <h5 className="my-1 text-lg font-bold">
              Part time project management & consulting, Arimed, Turkey{" "}
            </h5>
            <p className="text-base font-semibold">07/2015 - 07/2017 </p>
            <p className="my-1">
              Part time project drawing and calculation with AutoCAD{" "}
            </p>
          </div>
        </motion.div>
      </div>

      {/*  languages & tool  */}
      <div className="grid gap-2 md:grid-cols-2">
        <div>
          <h5 className="my-1 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((Languages) => (
              <Bar data={Languages} key={Languages.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-1 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-1">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
