import { useRef } from "react";
import * as projectsJSON from "../assets/projects.json";
import "./ProjectsComponent.css";

const ProjectsComponent = () => {
  const projects = useRef(JSON.parse(JSON.stringify(projectsJSON)).projects);

  return (
    <section className="projects p-20">
      <div className="container mx-auto">
        <h1 className="projects-heading w-fit mx-auto uppercase mt-12">
          My <span className="text-ms_light-gray">Projects</span>
        </h1>
        <div className="max-w-[1024px] mx-auto pt-24">
          <div className="grid grid-cols-3  gap-x-3 gap-y-2">
            {projects.current.map((project, index) => {
              return (
                <div
                  className={`project card grid grid-cols-1 grid-rows-2  text-white`}
                >
                  <div className="img-container ">
                    <img
                      className="object-cover h-full rounded-t-2xl"
                      src={project.image}
                      alt=""
                    />
                    {projects.demo_site ? (
                      <a
                        href={project.demo_site}
                        className="demo-site rounded-2xl bg-ms_dark-gray text-white absolute right-1 bottom-1"
                      >
                        Demo site
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="content p-4 rounded-b-2xl col-span-2">
                    <h4 className="title text-2xl">{project.name}</h4>
                    <p className="description py-4 font-light">
                      {project.description}
                    </p>
                    {project.links.map((link) => {
                      <span className="badge">{link}</span>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
