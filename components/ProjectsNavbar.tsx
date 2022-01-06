import { FunctionComponent } from "react";
import { category } from "../type";

export const NavItem: FunctionComponent<{ value: category | "all" }> = ({
  value,
}) => {
  return (
    <li className="cursor-pointer hover:text-secondary capitalize">{value}</li>
  );
};

const ProjectsNavbar = () => {
  return (
    <div className="space-x-3 flex px-3 py-2 overflow-x-auto list-none">
      <NavItem value="all" />
      <NavItem value="React" />
      <NavItem value="Next" />
      <NavItem value="Node" />
      <NavItem value="Vanilla(ES6)" />
      <NavItem value="Python" />
      <NavItem value="UI" />
      <NavItem value="SASS" />
      <NavItem value="Tailwind CSS" />
    </div>
  );
};

export default ProjectsNavbar;
