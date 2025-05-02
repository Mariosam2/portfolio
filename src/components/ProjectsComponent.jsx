import * as projectsJSON from "../assets/projects.json";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../slices/projectSlice";
import PhoneApp from "./PhoneApp";
import ProjectCard from "./ProjectCard";
import { createPortal } from "react-dom";
import { finishedLoading } from "../slices/loadingSlice";
import Loader from "./Loader";
import { unsetProject } from "../slices/projectSlice";

const ProjectsComponent = () => {
  const projects = useRef(JSON.parse(JSON.stringify(projectsJSON.projects)));
  const dispatch = useDispatch();
  const { isLoading, delay } = useSelector((state) => state.loadingState);
  const [isComponentReady, setIsComponentReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(finishedLoading());
      setIsComponentReady(true);
    }, delay);
    dispatch(unsetProject());
  }, []);

  //adding eventlisteners "manually" cause I couldn't attach them directly to the component
  useEffect(() => {
    if (isComponentReady) {
      //console.log(isComponentReady);
      const apps = document.querySelectorAll(".phone-app");
      apps.forEach((app) => {
        app.addEventListener("click", getProject);
      });
    }
  }, [isComponentReady]);

  const getProject = (e) => {
    const currentIndex = e.currentTarget.attributes["data-index"].value;
    dispatch(setProject({ ...projects.current[currentIndex] }));
  };

  return (
    <>
      {/* the loader component "knows" wheter or not be shown */}
      <Loader />
      <section
        className={`projects ${
          isLoading ? "loading" : ""
        } relative w-full  grid grid-cols-4 gap-x-1`}
      >
        {projects.current.map((project, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <PhoneApp
                index={index}
                icon={project.icon}
                title={project.title}
              />
            </div>
          );
        })}
        {createPortal(<ProjectCard />, document.body)}
      </section>
    </>
  );
};

export default ProjectsComponent;
