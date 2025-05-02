import { useLocation } from "react-router";
import "./PhoneApp.css";

const PhoneApp = ({ index, icon, title, discordId }) => {
  const routePath = useLocation().pathname;

  const ShowTitle = () => {
    if (title) {
      return (
        <h5 className="font-medium text-xs sm:text-sm lg:text-base capitalize text-white mt-2 text-nowrap">
          {title}
        </h5>
      );
    }
    if (discordId) {
      return (
        <h5 className="font-medium text-xs sm:text-sm lg:text-base  text-white mt-2 text-nowrap">
          {discordId}
        </h5>
      );
    }
  };
  return (
    <div
      data-index={index !== null ? index : ""}
      className="phone-app flex flex-col 
       justify-center items-center
        p-1 "
    >
      <div
        style={{
          backgroundImage: "url(" + icon + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`phone-img-container w-full  h-[40px] sm:h-[50px] relative rounded-xl`}
      ></div>

      <ShowTitle />
    </div>
  );
};

export default PhoneApp;
