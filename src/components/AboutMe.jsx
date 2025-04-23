import PhoneApp from "./PhoneApp";
import avatarImg from "../assets/avatar_pc_nobg.png";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import AboutMeCard from "./AboutMeCard";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../slices/cardSlice";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const AboutMe = () => {
  const dispatch = useDispatch();
  const { isLoading, delay } = useSelector((state) => state.loadingState);
  const [isComponentReady, setIsComponentReady] = useState(false);

  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(finishedLoading());
      setIsComponentReady(true);
    }, delay);
  }, []);

  useEffect(() => {
    if (isComponentReady) {
      const phoneApp = document.querySelector(".phone-app");
      phoneApp.addEventListener("click", () => {
        dispatch(open());
      });
    }
  }, [isComponentReady]);

  const ShowLoader = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <section className="about-me">
          <div className="grid grid-cols-3">
            <PhoneApp icon={avatarImg} title={"About Me"} />
          </div>
          {createPortal(<AboutMeCard />, document.body)}
        </section>
      );
    }
  };

  return <ShowLoader />;
};

export default AboutMe;
