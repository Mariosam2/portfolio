import { useEffect, useRef } from "react";
import * as codingSkillsJSON from "../assets/coding_skills.json";
import PhoneApp from "./PhoneApp";

const CodingSkills = () => {
  const codingSkills = useRef(
    JSON.parse(JSON.stringify(codingSkillsJSON.coding_skills))
  );

  return (
    <section className="coding-skills grid grid-cols-3">
      {codingSkills.current.map((skill, index) => {
        return (
          <PhoneApp
            index={null}
            key={index}
            icon={skill.img}
            title={skill.name}
          />
        );
      })}
    </section>
  );
};

export default CodingSkills;
