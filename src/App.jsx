import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsComponent from "./components/ProjectsComponent";
import { Routes, Route } from "react-router";
import CodingSkills from "./components/CodingSkills";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import IphoneImg from "./assets/iphone.png";
function App() {
  return (
    <>
      <div className="app h-screen  z-0 relative overflow-hidden">
        <Navbar />
        <div className="light purple -z-40 top-1/5 left-1/4"></div>
        <div className="light dark-purple -z-40 top-1/3 left-1/3"></div>
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
                <Route path="/" element={<Home />}></Route>
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
