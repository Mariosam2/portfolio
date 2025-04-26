import { useLocation } from "react-router";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import "./PhoneApp.css";

const PhoneApp = ({ index, icon, title }) => {
  const routePath = useLocation().pathname;

  const ShowClipboard = () => {
    if (routePath === "/contacts") {
      return (
        <div className="clipboard absolute grid place-items-center">
          <ClipboardIcon className="size-7" />
        </div>
      );
    }
  };

  const ShowTitle = () => {
    if (routePath !== "/contacts") {
      return (
        <h5 className="font-medium text-xs xs:text-sm sm:text-base text-white mt-2 text-nowrap">
          {title}
        </h5>
      );
    }
  };
  return (
    <div
      data-index={index !== null ? index : ""}
      className={`phone-app flex flex-col  justify-center items-center pt-4 ${
        routePath === "/contacts" ? "pt-8" : ""
      }  px-0 xxs:px-2`}
    >
      <div
        style={{
          backgroundImage: "url(" + icon + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="phone-img-container w-4/6 h-[55px] xxs:h-[60px] relative rounded-xl"
      >
        <ShowClipboard />
      </div>
      <ShowTitle />
    </div>
  );
};

export default PhoneApp;
