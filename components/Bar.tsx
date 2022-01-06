import { FunctionComponent } from "react";
import { ISkill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      traansition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiiffness: 100,
      },
    },
  };

  return (
    <div className="text-white my-1 bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-primary to-secondary"
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
