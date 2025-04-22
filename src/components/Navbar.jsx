import "./Navbar.css";
import { NavLink } from "react-router";
const Navbar = ({
  moveCursor,
  showCursor,
  hidCursor,
  handleMouseDown,
  handleMouseUp,
}) => {
  const navLinks = [
    {
      path: "/coding-skills",
      class: "coding-skills",
      content: "coding skills",
      rotate: "left",
      border: "border-e border-b",
    },
    {
      path: "/about-me",
      class: "about-me",
      content: "about me",
      rotate: "right",
      border: "border-b",
    },
    {
      path: "/projects",
      class: "projects",
      content: "projects",
      rotate: "left",
      border: "border-e",
    },
    {
      path: "/contacts",
      class: "contacts",
      content: "contacts",
      rotate: "right",
      border: "",
    },
  ];

  return (
    <nav
      className="navbar grid grid-cols-2 grid-rows-2 absolute w-full h-screen -z-10
     text-white "
    >
      {navLinks.map((navLink) => {
        return (
          <NavLink
            onMouseEnter={showCursor}
            onMouseMove={moveCursor}
            onMouseLeave={hidCursor}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            to={navLink.path}
            className={`${navLink.class} area col-span-1 row-span-1 relative ${navLink.border}`}
          >
            <span
              className={`rotate-${navLink.rotate} absolute top-1/2 translate-y-[-50%] ${navLink.rotate}-0 capitalize`}
            >
              &#123;{navLink.content}&#125;
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
