import { useEffect, useRef } from "react";
import * as codingSkillsJSON from "../assets/coding_skills.json";
import PhoneApp from "./PhoneApp";
import { useDispatch, useSelector } from "react-redux";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const CodingSkills = () => {
  const dispatch = useDispatch();
  const { isLoading, delay } = useSelector((state) => state.loadingState);
  const codingSkills = useRef(
    JSON.parse(JSON.stringify(codingSkillsJSON.coding_skills))
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(finishedLoading());
    }, delay);
  }, []);

  return (
    <>
      {/* the loader component "knows" wheter or not be shown */}
      <Loader />
      <section
        className={`coding-skills ${
          isLoading ? "loading" : ""
        } grid grid-cols-3`}
      >
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
    </>
  );
};

export default CodingSkills;
