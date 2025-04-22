import PhoneApp from "./PhoneApp";
import AboutMeIcon from "../assets/about_me.png";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import AboutMeCard from "./AboutMeCard";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../slices/cardSlice";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const AboutMe = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cardState.isOpen);
  const isLoading = useSelector((state) => state.loadingState.isLoading);

  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(finishedLoading());
    }, 750);
  }, []);

  useEffect(() => {
    const phoneApp = document.querySelector(".phone-app");
    phoneApp.addEventListener("click", () => {
      console.log("click");
      dispatch(open());
    });
  }, []);

  const ShowLoader = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <section className="about-me">
          <div className="grid grid-cols-3">
            <PhoneApp icon={AboutMeIcon} title={"About Me"} />
          </div>
          {createPortal(<AboutMeCard visible={isOpen} />, document.body)}
        </section>
      );
    }
  };

  return <ShowLoader />;
};

export default AboutMe;
