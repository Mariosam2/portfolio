import "./ProjectCard.css";
import { useRef } from "react";
import { ArrowUpOnSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import GithubLogo from "../assets/github_logo.png";
import { useSelector, useDispatch } from "react-redux";
import { unsetProject } from "../slices/projectSlice";
import { animated, useSpring } from "@react-spring/web";

const ProjectCard = () => {
  const cardRef = useRef(null);
  const project = useSelector((state) => state.projectState.project);
  const dispatch = useDispatch();
  const config = {
    mass: 1,
    tension: 120,
    friction: 50,
  };
  const [{ xys }, api] = useSpring(
    () => ({ xys: [0, 0, 1], config }),
    [config]
  );

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
      return <div onClick={closeProject} className="layover fixed z-7"></div>;
    }
  };

  const closeProject = () => {
    dispatch(unsetProject());
  };

  //card animation handlers

  const transformToCss = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  //TODO: making the animation more accentuated
  const calc = (x, y, rect) => {
    const buffer = 80;
    return [
      -(y - rect.top - rect.height / 2) / buffer,
      (x - rect.left - rect.width / 2) / buffer,
      1,
    ];
  };

  const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    });

  const handleMouseMove = (e) => {
    const rectangle = document.body.getBoundingClientRect();
    api.start({
      xys: calc(e.clientX, e.clientY, rectangle),
    });
  };

  return (
    <>
      <animated.div
        className={`project-card fixed top-1/2 z-8 left-1/2 translate-x-[-50%] translate-y-[-50%]   text-white overflow-clip  w-[400px]  rounded-2xl ${
          project !== null ? "visible" : ""
        }`}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ transform: xys.to(transformToCss) }}
      >
        <div className="glow top-left"></div>
        <div className="glow right-bottom"></div>

        <div className="project-img-container relative z-9 p-4">
          <img className="rounded-xl" src={project?.image} alt="" />
        </div>
        <div className="content relative z-9  p-4 ">
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
      </animated.div>
      <ShowLayover />
    </>
  );
};

export default ProjectCard;
