import * as projectsJSON from "../assets/projects.json";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import PhoneApp from "./PhoneApp";
import ProjectCard from "./ProjectCard";

const ProjectsComponent = () => {
  const projects = useRef(JSON.parse(JSON.stringify(projectsJSON.projects)));
  const [project, setProject] = useState(null);

  const getProject = (e) => {
    const currentIndex = e.currentTarget.attributes["data-index"].value;
    setProject(projects.current[currentIndex]);
  };

  useEffect(() => {
    const apps = document.querySelectorAll(".phone-app");
    apps.forEach((app) => {
      app.addEventListener("click", getProject);
    });
  }, []);

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
      <ProjectCard project={project} />
    </section>
  );
};

export default ProjectsComponent;
