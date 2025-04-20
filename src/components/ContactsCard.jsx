import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { close } from "../slices/cardSlice";

const ContactsCard = ({ visible }) => {
  const dispatch = useDispatch();
  const ShowLayover = () => {
    if (visible) {
      return (
        <div
          onClick={() => dispatch(close())}
          className="layover fixed z-7"
        ></div>
      );
    }
  };
  return (
    <>
      <div
        className={`contacts-card rounded-2xl fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white w-[400px] z-8  p-4 ${
          visible ? "visible" : ""
        }`}
      >
        <div className="glow top-left"></div>
        <div className="glow right-bottom"></div>
        <div className="content  relative z-9">
          <div className="heading mb-2 ">Contacts</div>
          <p className="content font-light p-2 rounded-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            non aspernatur amet quidem expedita minima eligendi aperiam eos,
            inventore sunt.
          </p>
        </div>
      </div>
      <ShowLayover />
    </>
  );
};

export default ContactsCard;
