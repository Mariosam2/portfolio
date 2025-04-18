import PhoneApp from "./PhoneApp";
import AboutMeIcon from "../assets/about_me.png";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import AboutMeCard from "./AboutMeCard";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../slices/cardSlice";

const AboutMe = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cardState.isOpen);

  useEffect(() => {
    const phoneApp = document.querySelector(".phone-app");
    phoneApp.addEventListener("click", () => {
      console.log("click");
      dispatch(open());
    });
  }, []);

  return (
    <section className="about-me">
      <div className="grid grid-cols-3">
        <PhoneApp icon={AboutMeIcon} title={"About Me"} />
      </div>
      {createPortal(<AboutMeCard visible={isOpen} />, document.body)}
    </section>
  );
};

export default AboutMe;
