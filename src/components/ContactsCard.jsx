import contactsIcon from "../assets/contacts.png";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../slices/cardSlice";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import githubLogo from "../assets/github_logo.png";
import discordLogo from "../assets/discord_logo.svg";
import { config, transformToCss, calc } from "../assets/cardAnimation";
import { animated, useSpring } from "@react-spring/web";

const ContactsCard = ({ visible }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cardState.isOpen);
  const [{ xy }, api] = useSpring(() => ({ xy: [0, 0], config }), [config]);
  const ShowLayover = () => {
    if (isOpen) {
      return (
        <div
          onClick={() => dispatch(close())}
          className="layover fixed z-7"
        ></div>
      );
    }
  };

  //animation handlers
  const handleMouseLeave = () =>
    api.start({
      xy: [0, 0],
    });

  const handleMouseMove = (e) => {
    const rectangle = document.body.getBoundingClientRect();
    api.start({
      xy: calc(e.clientX, e.clientY, rectangle),
    });
  };
  return (
    <>
      <animated.div
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ transform: xy.to(transformToCss) }}
        className={`contacts-card rounded-2xl fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white z-8  p-4 ${
          isOpen ? "visible" : ""
        }`}
      >
        <div className="glow top-left"></div>
        <div className="glow right-bottom"></div>
        <div className="content  relative z-9">
          <div className="flex items-center px-2 mb-2 ">
            <h2 className="heading font-bold text-2xl">Contacts</h2>
            <img className="size-10 ms-2" src={contactsIcon} alt="" />
          </div>
          <div className="content flex flex-col p-2 pt-4 gap-y-3">
            <div className="phone flex items-center">
              <PhoneIcon className="size-5 me-2" />
              +41 79 5305143
            </div>
            <div className="mail flex items-center">
              <EnvelopeIcon className="size-5 me-2" />
              mariosamdev@gmail.com
            </div>
            <div className="github flex items-center">
              <img src={githubLogo} className="size-5 me-2" />
              Mariosam2
            </div>
            <div className="discord flex items-center">
              <img src={discordLogo} className="size-5 me-2" />
              faco0_
            </div>
          </div>
        </div>
      </animated.div>
      <ShowLayover />
    </>
  );
};

export default ContactsCard;
