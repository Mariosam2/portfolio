import "./ProjectCard.css";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import GithubLogo from "../assets/github_logo.png";
import { useEffect } from "react";

const ProjectCard = ({ project }) => {
  useEffect(() => {
    const projectCard = document.querySelector(".project-card");
    console.log(projectCard, project);
    projectCard.classList.add("visible");
  });

  const ShowApis = () => {
    if (project?.APIs.length > 0) {
      return (
        <div className="flex items-end justify-end">
          <span className="inline-block">APIs:</span>
          <div className="apis">
            {project.APIs.map((api, index) => {
              return (
                <img
                  key={index}
                  className="size-8 ms-2"
                  src={api.icon}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      );
    }
  };
  //TODO: fix the visibility for the animation and check the conditions
  return (
    <div
      className={`project-card absolute top-0 left-1/2 translate-x-[-50%]  w-[400px] p-4 rounded-2xl ${
        project !== null ? "visible" : ""
      }`}
    >
      {project}
      <div className="project-img-container p-6">
        <img className="rounded-xl" src={project?.image} alt="" />
      </div>
      <div className="content bg-ms_black p-4 rounded-xl">
        <div className="project-heading flex  items-center">
          <h4 className="text-2xl font-semibold">{project?.name}</h4>
          <img
            className="size-8 ms-2 object-contain"
            src={project?.icon}
            alt=""
          />
          <div className="technologies ms-auto flex items-center">
            {project?.technologies.map((technology, index) => {
              return (
                <img
                  key={index}
                  className="size-8 ms-2"
                  src={technology.icon}
                  alt=""
                />
              );
            })}
          </div>
        </div>

        <p className="font-light py-4">{project?.description}</p>
        <div className="card-footer grid grid-cols-2">
          <div className="badges">
            <a
              href={project?.demo_site}
              className="badge p-2 flex items-center"
            >
              Demo site <ArrowUpOnSquareIcon className="size-6 ms-2" />
            </a>
            {project !== null
              ? Object.keys(project.github_links).map((key, index) => {
                  return (
                    <a
                      key={index}
                      href={project.github_links.key}
                      className="badge p-2 flex items-center"
                    >
                      <span className="capitalize">{key}</span>
                      <img className="size-6 ms-2" src={GithubLogo} alt="" />
                    </a>
                  );
                })
              : ""}
          </div>
          <ShowApis />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
