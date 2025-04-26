import "./Cards.css";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import avatarImg from "../assets/avatar_pc_nobg.png";
import aboutMeImg from "../assets/aboutme.png";
import { close } from "../slices/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { config, transformToCss, calc } from "../assets/cardAnimation";
import { animated, useSpring } from "@react-spring/web";

const AboutMeCard = () => {
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
        className={`about-me-card rounded-2xl fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white  z-8 p-4 ${
          isOpen ? "visible" : ""
        }`}
      >
        <div className="glow top-left"></div>
        <div className="glow right-bottom"></div>
        <div className="content relative z-9">
          <div className=" mb-2  flex items-center p-2">
            <img
              className="size-10 xxs:size-12  me-3"
              src={aboutMeImg}
              alt=""
            />
            <h2 className="heading font-bold text-2xl">About Me</h2>
          </div>
          <p className=" font-light p-2 rounded-xl text-sm sm:text-base ">
            My name is Marco Mariosa, I’m 23 years old, and I have a strong
            passion for motorcycles, video games, technology and whatever takes
            creativity. My journey into the world of computers began at the age
            of 13, thanks to my grandfather, who not only introduced me to
            technology but also worked in the IT industry himself. His influence
            sparked a deep interest that quickly evolved into a long-term
            commitment to learning. Since then, I’ve continued to expand my
            skills and knowledge, driven by curiosity and a desire to create.
            Whether it’s exploring new technologies or approaching challenges, ,
            I’m always looking for ways to grow both personally and
            professionally.
          </p>

          <div className="pdf-links pt-4 flex flex-wrap xs:flex-nowrap gap-y-2 xs:gap-y-0">
            <div className="pdf-link flex  items-center p-2 bg-white text-black max-w-fit rounded-xl me-3">
              <a
                className="inline-block text-sm sm:text-base"
                href="./curriculum.pdf"
                target="_blank"
              >
                Curriculum Vitae
              </a>
              <ArrowTopRightOnSquareIcon className="size-6 ms-2  mb-1" />
            </div>

            <div className="pdf-link flex items-center p-2  bg-white text-black  max-w-fit rounded-xl">
              <a
                className="inline-block text-sm sm:text-base"
                href="./boolean.pdf"
                target="_blank"
              >
                Boolean Course
              </a>
              <ArrowTopRightOnSquareIcon className="size-6 ms-2 mb-1" />
            </div>
          </div>
        </div>
      </animated.div>
      <ShowLayover />
    </>
  );
};

export default AboutMeCard;
