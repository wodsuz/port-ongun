import { FunctionComponent } from "react";
import { ISkill } from "../type";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="text-white my-1 bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-primary to-secondary"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
