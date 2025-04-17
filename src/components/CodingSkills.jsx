import { useEffect, useRef } from "react";
import * as codingSkillsJSON from "../assets/coding_skills.json";

const CodingSkills = () => {
  const codingSkills = useRef(
    JSON.parse(JSON.stringify(codingSkillsJSON.coding_skills))
  );
  useEffect(() => {
    console.log(codingSkills.current);
  }, []);

  return (
    <section className="coding-skills grid grid-cols-3">
      {codingSkills.current.map((skill, index) => {
        return (
          <div
            key={index}
            className="coding-skill col-span-1 flex flex-col  items-center  p-4 "
          >
            <img
              className="w-4/6 min-h-[50px] object-contain"
              src={skill.img}
              alt=""
            />

            <h5 className="font-thin text-xl text-white mt-2">{skill.name}</h5>
          </div>
        );
      })}
    </section>
  );
};

export default CodingSkills;
