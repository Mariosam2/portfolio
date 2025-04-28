import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsComponent from "./components/ProjectsComponent";
import { Routes, Route, useLocation, NavLink } from "react-router";
import CodingSkills from "./components/CodingSkills";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import IphoneImg from "./assets/iphone.png";
import { useEffect, useRef } from "react";
import homeIcon from "./assets/home.png";
import { loading } from "./slices/loadingSlice";
import { useDispatch } from "react-redux";
import TextImg from "./assets/text.svg";

function App() {
  const cursorRef = useRef(null);
  const routePath = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("loading");
    dispatch(loading());
  }, [routePath]);

  const ShowHomeLink = () => {
    if (routePath !== "/") {
      return (
        <NavLink
          className="absolute bottom-2 xxs:bottom-4 md:bottom-6 left-1/2 translate-x-[-50%]"
          to={"/"}
        >
          <img className="size-6 xxs:size-8" src={homeIcon} alt="" />
        </NavLink>
      );
    }
  };

  const showCursor = () => {
    if (window.innerWidth > 1024) {
      cursorRef.current.style.visibility = "visible";
    }
  };

  const hidCursor = () => {
    cursorRef.current.style.visibility = "hidden";
  };

  const moveCursor = (e) => {
    const offset = 70;
    const x = e.clientX;
    const y = e.clientY;
    cursorRef.current.style.left = x - offset + "px";
    cursorRef.current.style.top = y - offset + "px";
  };

  const handleMouseDown = () => {
    cursorRef.current.classList.add("mouse-down");
  };

  const handleMouseUp = () => {
    cursorRef.current.classList.remove("mouse-down");
  };

  return (
    <>
      <div className="app min-h-screen  z-0 relative overflow-x-clip overflow-y-visible">
        <Navbar
          showCursor={showCursor}
          hidCursor={hidCursor}
          moveCursor={moveCursor}
          handleMouseDown={handleMouseDown}
          handleMouseUp={handleMouseUp}
        />
        <div ref={cursorRef} id="cursor"></div>
        <div className="light -z-40 top-1/6 left-1/5"></div>
        <div className="light -z-40 top-1/3 left-1/3"></div>
        <div className="layover glass -z-30"></div>
        <div className="scrolling-text -z-20">
          <div className="RightToLeft   flex ">
            <svg
              className="w-screen mx-4 xxs:mx-8"
              style={{ maskImage: `url(${TextImg})` }}
            >
              <defs>
                <filter id="trans-shadow">
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite operator="out" in2="SourceGraphic" />
                </filter>
              </defs>
              <image
                width={100 + "%"}
                className="h-[100px] lg:h-[150px]"
                filter="url(#trans-shadow)"
                xlinkHref={TextImg}
                href={TextImg}
              />
            </svg>
            <svg
              className="w-screen mx-4 xxs:mx-8"
              style={{ maskImage: `url(${TextImg})` }}
            >
              <defs>
                <filter id="trans-shadow">
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite operator="out" in2="SourceGraphic" />
                </filter>
              </defs>
              <image
                width={100 + "%"}
                className="h-[100px] lg:h-[150px]"
                filter="url(#trans-shadow)"
                xlinkHref={TextImg}
                href={TextImg}
              />
            </svg>
          </div>
        </div>

        <div className="iphone-container">
          <img className="iphone-img relative z-5" src={IphoneImg} alt="" />
          <div className="iphone-background z-4">
            <div className="layover layover-iphone"></div>
          </div>

          <div className="dinamic-component z-6  text-white  @container  ">
            <div className="content relative  h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coding-skills" element={<CodingSkills />} />
                <Route path="/projects" element={<ProjectsComponent />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
              <ShowHomeLink />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
