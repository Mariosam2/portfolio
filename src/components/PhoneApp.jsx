import { useLocation } from "react-router";
import "./PhoneApp.css";
import ClipboardIcon from "./ClipboardIcon";

const PhoneApp = ({ index, icon, title }) => {
  const routePath = useLocation().pathname;

  const ShowClipboard = () => {
    if (routePath === "/contacts") {
      return (
        <div className="clipboard absolute grid place-items-center">
          <ClipboardIcon />
        </div>
      );
    }
  };

  const ShowTitle = () => {
    if (routePath !== "/contacts") {
      return (
        <h5 className="font-medium text-xs sm:text-sm lg:text-base text-white mt-2 text-nowrap">
          {title}
        </h5>
      );
    }
  };
  return (
    <div
      data-index={index !== null ? index : ""}
      className={`phone-app flex flex-col  justify-center  items-center  p-1 `}
    >
      <div
        style={{
          backgroundImage: "url(" + icon + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="phone-img-container w-full  h-[40px] sm:h-[50px] relative rounded-xl"
      >
        <ShowClipboard />
      </div>

      <ShowTitle />
    </div>
  );
};

export default PhoneApp;
