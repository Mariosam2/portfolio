import "./ProjectCard.css";
import { ArrowUpOnSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import GithubLogo from "../assets/github_logo.png";
import { useSelector, useDispatch } from "react-redux";
import { unsetProject } from "../slices/projectSlice";

const ProjectCard = () => {
  const project = useSelector((state) => state.projectState.project);
  const dispatch = useDispatch();

  const ShowApis = () => {
    if (project?.APIs?.length > 0) {
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

  const ShowLinks = () => {
    if (project?.github_links?.length > 0) {
      return project.github_links.map((link, index) => {
        return (
          <a
            key={index}
            href={link.link}
            className="badge p-2 flex items-center"
          >
            <span className="capitalize">{link.title}</span>
            <img className="size-6 ms-2" src={GithubLogo} alt="" />
          </a>
        );
      });
    }
  };

  const ShowDemoSite = () => {
    if (project?.demo_site) {
      return (
        <a href={project.demo_site} className="badge p-2 flex items-center">
          Demo site <ArrowUpOnSquareIcon className="size-6 ms-2" />
        </a>
      );
    }
  };

  const ShowLayover = () => {
    if (project !== null) {
      return <div className="layover fixed z-7"></div>;
    }
  };

  const closeProject = () => {
    dispatch(unsetProject());
  };

  return (
    <>
      <div
        className={`project-card fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-8 text-white  w-[400px] p-4 rounded-2xl ${
          project !== null ? "visible" : ""
        }`}
      >
        <XMarkIcon
          onClick={closeProject}
          className="absolute top-0 right-0 m-2 size-6 stroke-2 hover:cursor-pointer"
        />
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
              {project?.technologies
                ? project?.technologies.map((technology, index) => {
                    return (
                      <img
                        key={index}
                        className="size-8 ms-2"
                        src={technology.icon}
                        alt=""
                      />
                    );
                  })
                : ""}
            </div>
          </div>

          <p className="font-light py-4">{project?.description}</p>
          <div className="card-footer grid grid-cols-2">
            <div className="badges">
              <ShowDemoSite />
              <ShowLinks />
            </div>
            <ShowApis />
          </div>
        </div>
      </div>
      <ShowLayover />
    </>
  );
};

export default ProjectCard;
