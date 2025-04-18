import "./AboutMeCard.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { close } from "../slices/cardSlice";
import { useDispatch } from "react-redux";
const AboutMeCard = ({ visible }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`about-me-card rounded-2xl fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white w-[400px] z-8 p-4 ${
        visible ? "visible" : ""
      }`}
    >
      <XMarkIcon
        onClick={() => dispatch(close())}
        className="absolute top-0 right-0 m-2 size-6 stroke-2 hover:cursor-pointer"
      />
      <div className="heading mb-2">About Me</div>
      <p className="content font-light p-2 rounded-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non
        aspernatur amet quidem expedita minima eligendi aperiam eos, inventore
        sunt.
      </p>
    </div>
  );
};

export default AboutMeCard;
