import { ClipboardIcon as ClipboardSVG } from "@heroicons/react/24/outline";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import "./ClipboardIcon.css";

const ClipboardIcon = () => {
  const { hasCopied } = useSelector((state) => state.copyState);
  const ShowClipboardIcon = () => {
    if (hasCopied === null) {
      return <ClipboardSVG className="size-7" />;
    } else if (hasCopied === true) {
      return (
        <div className="checkmark-icon relative">
          <div className="circle bg-green-600 size-7 rounded-full"></div>
          <CheckIcon
            className="checkmark size-6 absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
            strokeDasharray={"50px , 50px"}
            strokeDashoffset={"0px"}
          />
        </div>
      );
    } else {
      return (
        <div className="xmark-icon">
          <div className="circle bg-red-600 size-8 rounded-full"></div>
          <XMarkIcon
            className="xmark size-6 absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
            strokeDasharray={"50px"}
            strokeDashoffset={"0px"}
          />
        </div>
      );
    }
  };
  return <ShowClipboardIcon />;
};

export default ClipboardIcon;
