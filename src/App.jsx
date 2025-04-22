import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsComponent from "./components/ProjectsComponent";
import { Routes, Route, useLocation } from "react-router";
import CodingSkills from "./components/CodingSkills";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import IphoneImg from "./assets/iphone.png";
import { useRef } from "react";

function App() {
  const cursorRef = useRef(null);
  const showCursor = () => {
    cursorRef.current.style.visibility = "visible";
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
      <div className="app h-screen  z-0 relative overflow-hidden">
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
          <div className="RightToLeft">
            <span>Hi I'm Marco, I'm a Junior Web Developer.</span>
            <span>Hi I'm Marco, I'm a Junior Web Developer.</span>
          </div>
        </div>

        <div className="iphone-container ">
          <img className="iphone-img relative z-5" src={IphoneImg} alt="" />
          <div className="iphone-background z-4">
            <div className="layover layover-iphone"></div>
          </div>

          <div className="dinamic-component z-6  text-white ">
            <div className="content relative  h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coding-skills" element={<CodingSkills />} />
                <Route path="/projects" element={<ProjectsComponent />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
