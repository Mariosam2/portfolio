import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ProjectImg.css";

const ProjectImg = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { project } = useSelector((state) => state.projectState);

  useEffect(() => {
    if (project !== null) {
      setImgLoaded(false);
    }
  }, [project]);

  const handleOnLoad = () => {
    setTimeout(() => {
      setImgLoaded(true);
    }, 250);
  };

  return (
    <div className="project-img-container relative z-9 ">
      <div
        className={`project-img-loader absolute top-0 h-[180px] w-full ${
          !imgLoaded ? "block" : "hidden"
        }`}
      ></div>
      <img
        className={`project-img rounded-t-xl  h-[180px] w-full object-cover ${
          imgLoaded ? "loaded" : ""
        }`}
        src={project?.image}
        alt=""
        onLoad={handleOnLoad}
      />
    </div>
  );
};

export default ProjectImg;
