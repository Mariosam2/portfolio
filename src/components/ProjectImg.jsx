import { useState } from "react";

import "./ProjectImg.css";

const ProjectImg = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleOnLoad = () => {
    setImgLoaded(true);
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
