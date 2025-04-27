import PhoneApp from "./PhoneApp";
import AboutMeIcon from "../assets/aboutme.png";
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
    setTimeout(() => {
      dispatch(finishedLoading());
      setIsComponentReady(true);
    }, delay);
  }, []);

  useEffect(() => {
    if (isComponentReady) {
      //console.log(isComponentReady);
      const phoneApp = document.querySelector(".phone-app");
      phoneApp.addEventListener("click", () => {
        dispatch(open());
      });
    }
  }, [isComponentReady]);

  return (
    <>
      {/* the loader component "knows" wheter or not be shown */}
      <Loader />
      <section className={`about-me ${isLoading ? "loading" : ""}`}>
        <div className="grid grid-cols-3">
          <div className="cursor-pointer">
            <PhoneApp icon={AboutMeIcon} title={"About Me"} />
          </div>
        </div>
        {createPortal(<AboutMeCard />, document.body)}
      </section>
    </>
  );
};

export default AboutMe;
