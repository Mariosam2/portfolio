import { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router";

const Navbar = ({
  moveCursor,
  showCursor,
  hidCursor,
  handleMouseDown,
  handleMouseUp,
}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const route = useLocation();

  useEffect(() => {
    setShowMobileNav(false);
  }, [route]);

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

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <nav
        className="navbar hidden sm:grid  grid-cols-2 grid-rows-2 absolute w-full min-h-[830px] h-screen -z-10
     text-white "
      >
        {navLinks.map((navLink, index) => {
          return (
            <NavLink
              onMouseEnter={showCursor}
              onMouseMove={moveCursor}
              onMouseLeave={hidCursor}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              to={navLink.path}
              key={index}
              className={`${navLink.class} area col-span-1 row-span-1 relative ${navLink.border}`}
            >
              <span
                className={`rotate-${navLink.rotate} absolute top-1/2 translate-y-[-50%] capitalize`}
                style={{
                  left: navLink.rotate === "left" ? 0 : "unset",
                  right: navLink.rotate === "right" ? 0 : "unset",
                }}
              >
                &#123;{navLink.content}&#125;
              </span>
            </NavLink>
          );
        })}
      </nav>
      <div
        onClick={toggleMobileNav}
        className={`burger flex flex-col sm:hidden  gap-y-1 p-4 pt-6 relative z-2 self-start`}
      >
        <div
          className={`line ${
            showMobileNav ? "close" : " "
          } h-[3px] w-7 bg-white rounded-2xl relative`}
        ></div>
        <div
          className={`line ${
            showMobileNav ? "close" : " "
          } h-[3px] w-7 bg-white rounded-2xl relative`}
        ></div>
        <div
          className={`line ${
            showMobileNav ? "close" : " "
          } h-[3px] w-7 bg-white rounded-2xl relative`}
        ></div>
      </div>
      <nav
        className={`ms_mobile-nav  z-1 flex sm:hidden  flex-col gap-y-2 ps-3 pt-20 ${
          showMobileNav ? "visible" : " "
        }`}
      >
        <NavLink className="text-white p-2 font-semibold text-lg" to={"/"}>
          <span className="capitalize">Home</span>
        </NavLink>
        {navLinks.map((navLink, index) => {
          return (
            <NavLink
              className="text-white p-2 font-semibold text-lg"
              key={index}
              to={navLink.path}
            >
              <span className="capitalize">{navLink.content}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
