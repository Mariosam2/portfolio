import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";
import "./Home.css";
import flashlightIcon from "../assets/ios-flashlight.svg";
import cameraIcon from "../assets/ios-camera.svg";
import { useLocation } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, delay } = useSelector((state) => state.loadingState);
  const [date, setDate] = useState(null);
  const intervalId = useRef(null);

  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(finishedLoading());
    }, delay);

    getDateTime();

    return () => {
      //clear interval when component unmount
      //console.log(intervalId.current, "clear interval");
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    //in order to update the component synced with the current time I get the remaining seconds before update
    //and everytime the date changes if there is a interval I clear it and recreate it with the remaining secs updated
    if (intervalId.current !== null) {
      //console.log("reset interval", intervalId.current);
      clearInterval(intervalId.current);
    }
    if (date !== null) {
      //console.log(60 - new Date().getSeconds());
      const remainingSecs = 60 - new Date().getSeconds();
      intervalId.current = setInterval(() => {
        getDateTime();
        console.log("get date");
      }, remainingSecs * 1000);
      //console.log(intervalId);
    }
  }, [date]);

  const getDateTime = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    //formatting the date, splitting with [" ",","," at ",":"]
    // and populating the date in the state using the dateArray
    const displayDate = new Intl.DateTimeFormat("en-US", options).format(date);
    const regex = new RegExp("\\sat\\s|\\s|,\\s|:");
    const dateArray = displayDate.split(regex);
    setDate({
      day: dateArray[0] + " " + dateArray[2] + " " + dateArray[1],
      hours: dateArray[3],
      minutes: dateArray[4],
    });
  };

  return (
    <>
      {/* the loader component "knows" wheter or not be shown */}
      <Loader />
      <section
        className={`home h-full  relative ${isLoading ? "loading" : ""}`}
      >
        <div className="content pt-12">
          <div className="date flex justify-center">
            <span>{date?.day}</span>
          </div>
          <div className="time flex justify-center">
            <span className="hours">{date?.hours}</span>
            <span className="dots mx-1">:</span>
            <span className="minutes">{date?.minutes}</span>
          </div>
        </div>
        <img
          className="flashlight size-10 xs:size-12 p-1 bg-ms_dark-gray rounded-full absolute left-4 bottom-8"
          src={flashlightIcon}
          alt=""
        />
        <img
          className="camera size-10 xs:size-12 p-1 bg-ms_dark-gray rounded-full  absolute right-4 bottom-8"
          src={cameraIcon}
          alt=""
        />
      </section>
    </>
  );
};

export default Home;
