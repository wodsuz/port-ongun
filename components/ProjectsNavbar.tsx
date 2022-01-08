import { FunctionComponent } from "react";
import { category } from "../type";

export const NavItem: FunctionComponent<{
  value: category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-secondary";
  if (active === value) className += " text-secondary";
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      {" "}
      <NavItem value="all" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Next" {...props} />
      <NavItem value="Node" {...props} />
      <NavItem value="API" {...props} />
      <NavItem value="Bootstrap" {...props} />
      <NavItem value="TypeScript" {...props} />
      <NavItem value="Vanilla(ES6)" {...props} />
      <NavItem value="Python" {...props} />
      <NavItem value="Selenium" {...props} />
      <NavItem value="KivyMD" {...props} />
      <NavItem value="Google Solutions" {...props} />
      <NavItem value="UI" {...props} />
      <NavItem value="SASS" {...props} />
      <NavItem value="Tailwind CSS" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
