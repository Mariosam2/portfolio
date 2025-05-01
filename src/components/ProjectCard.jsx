import "./Cards.css";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import GithubLogo from "../assets/github.png";
import { useSelector, useDispatch } from "react-redux";
import { unsetProject } from "../slices/projectSlice";
import { animated, useSpring } from "@react-spring/web";
import { config, transformToCss, calc } from "../assets/cardAnimation";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ProjectCard = () => {
  const project = useSelector((state) => state.projectState.project);
  const dispatch = useDispatch();
  const [{ xy }, api] = useSpring(() => ({ xy: [0, 0], config }), [config]);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [project]);

  const ShowApis = () => {
    if (project?.APIs?.length > 0) {
      return (
        <div className="flex items-start justify-end">
          <span className="inline-block pt-2 text-sm sm:text-base">APIs:</span>
          <div className="apis">
            {project.APIs.map((api, index) => {
              return (
                <a
                  className="grid place-items-center ms-2 pt-2"
                  href={api.link}
                >
                  <img
                    key={index}
                    className="w-12 h-6  object-contain"
                    src={api.icon}
                    alt=""
                  />
                </a>
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
            target="_blank"
            href={link.link}
            className="badge py-2 flex items-center text-sm sm:text-base"
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
        <a
          target="_blank"
          href={project.demo_site}
          className="badge py-2 flex items-center text-sm sm:text-base"
        >
          Demo site <ArrowTopRightOnSquareIcon className="size-6 ms-2" />
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

  const handleMouseLeave = () =>
    api.start({
      xy: [0, 0],
    });

  const handleMouseMove = (e) => {
    const rectangle = document.body.getBoundingClientRect();
    api.start({
      xy: calc(e.clientX, e.clientY, rectangle),
    });
  };

  const handleOnLoad = () => {
    setTimeout(() => {
      setImgLoaded(true);
    }, 500);
  };

  return (
    <>
      <animated.div
        className={`project-card fixed top-1/2 z-8 left-1/2 translate-x-[-50%] translate-y-[-50%]   text-white  rounded-2xl ${
          project !== null ? "visible" : ""
        }`}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ transform: xy.to(transformToCss) }}
      >
        <div className="glow right-bottom"></div>

        <XMarkIcon
          onClick={() => dispatch(unsetProject())}
          className="xmark size-6 absolute top-0 right-0 mt-1 me-1 p-0.5  z-11 cursor-pointer rounded-full"
        />
        <div className="project-img-container relative z-9 ">
          <div
            className={`project-img-loader absolute top-0 h-[180px] w-full ${
              !imgLoaded ? "block" : "hidden"
            }`}
          ></div>
          <img
            className={`project-img roundedt-t-xl  h-[180px] w-full object-cover ${
              imgLoaded ? "loaded" : ""
            }`}
            src={project?.image}
            alt=""
            onLoad={handleOnLoad}
          />
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
                        className="size-6 xxs:size-8 ms-2"
                        src={technology.icon}
                        alt=""
                      />
                    );
                  })
                : ""}
            </div>
          </div>

          <p className="font-light  text-sm sm:text-base text-justify py-4">
            {project?.description}
          </p>
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
