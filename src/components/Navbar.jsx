import "./Navbar.css";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav
      className="navbar grid grid-cols-2 grid-rows-2 absolute w-full h-screen -z-10
     text-white "
    >
      <NavLink
        to="/coding-skills"
        className="coding-skills  area col-span-1 row-span-1 relative border-e border-b "
      >
        <span className="rotate-left absolute top-1/2 translate-y-[-50%] left-0">
          &#123;Coding Skills&#125;
        </span>
      </NavLink>
      <NavLink
        to="/about-me"
        className="about-me area col-span-1 row-span-1 relative border-b"
      >
        <span className="rotate-right absolute top-1/2 right-0 translate-y-[-50%]">
          About Me
        </span>
      </NavLink>
      <NavLink
        to="/projects"
        className="projects area col-span-1 row-span-1 relative border-e"
      >
        <span className="rotate-left absolute top-1/2 translate-y-[-50%] left-0">
          Projects
        </span>
      </NavLink>
      <NavLink
        to="/contacts"
        className="contacts area col-span-1 row-span-1 relative"
      >
        <span className="rotate-right absolute top-1/2 right-0 translate-y-[-50%]">
          Contacts
        </span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
