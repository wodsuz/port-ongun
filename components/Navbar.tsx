import { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a className="flex transition duration-1000 group ">
        <span className="mx-2 cursor-pointer " onClick={() => setActive(name)}>
          {name}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-0.5 bg-primary"></span>
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const { pathname } = useRouter();

  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname === "/") setActive("About");
    else if (pathname === "/projects") setActive("Projects");
    else if (pathname === "/resume") setActive("Resume");
    else if (pathname === "/pay") setActive("Payment");
  }, [pathname]);
  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-2 md:text-2xl border-primary">
        {active}
      </span>

      <div className="flex text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Payment"
          route="/pay"
        />
      </div>
    </div>
  );
};

export default Navbar;
