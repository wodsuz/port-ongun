import { motion } from "framer-motion";
import { NextPage } from "next";
import { fadeInUp, stagger, routerAnimation } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Getday } from "../components/getday";

const index: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Getday />
      <h5 className="my-3 text-lg font-medium text-justify">
        Electrical and electronics engineering bachelor’s degree, Automation and
        Robotics engineering master’s degree, as of now, I am focused on machine
        learning and web application development. I have 5+ years of ECMAScript
        work experience and knowledge on Java & Python. Focusing on responsive,
        web and mobile applications by using new, promising frameworks. I have
        huge interest on following new technologies, innovations and
        implementing them on older outdated applications.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-100 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-1 text-xl font-semibold tracking-wide">
          {" "}
          Responsibilities{" "}
        </h4>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-1 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
