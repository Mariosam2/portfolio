import * as projectsJSON from "../assets/projects.json";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../slices/projectSlice";
import PhoneApp from "./PhoneApp";
import ProjectCard from "./ProjectCard";
import { createPortal } from "react-dom";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const ProjectsComponent = () => {
  const projects = useRef(JSON.parse(JSON.stringify(projectsJSON.projects)));
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loadingState.isLoading);

  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(finishedLoading());
    }, 750);
  }, []);

  //adding eventlisteners "manually" cause I couldn't attach them directly to the component
  useEffect(() => {
    const apps = document.querySelectorAll(".phone-app");
    apps.forEach((app) => {
      app.addEventListener("click", getProject);
    });
  }, []);

  const getProject = (e) => {
    const currentIndex = e.currentTarget.attributes["data-index"].value;
    dispatch(setProject({ ...projects.current[currentIndex] }));
  };

  const ShowLoader = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <section className="projects relative w-full  grid grid-cols-3 ">
          {projects.current.map((project, index) => {
            return (
              <PhoneApp
                index={index}
                key={index}
                icon={project.icon}
                title={project.name}
              />
            );
          })}
          {createPortal(<ProjectCard />, document.body)}
        </section>
      );
    }
  };
  return <ShowLoader />;
};

export default ProjectsComponent;
