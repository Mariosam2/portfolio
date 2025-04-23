import { useEffect, useRef } from "react";
import * as codingSkillsJSON from "../assets/coding_skills.json";
import PhoneApp from "./PhoneApp";
import { useDispatch, useSelector } from "react-redux";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const CodingSkills = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loadingState.isLoading);
  const codingSkills = useRef(
    JSON.parse(JSON.stringify(codingSkillsJSON.coding_skills))
  );
  useEffect(() => {
    console.log(isLoading);
    dispatch(loading());
    console.log(isLoading);
    setTimeout(() => {
      dispatch(finishedLoading());
    }, 500);
  }, []);

  const ShowLoader = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <section className="coding-skills grid grid-cols-3 ">
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
    }
  };

  return <ShowLoader />;
};

export default CodingSkills;
