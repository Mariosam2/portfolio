import "./Cards.css";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import aboutMeImg from "../assets/aboutme.png";
import { close } from "../slices/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { config, transformToCss, calc } from "../assets/cardAnimation";
import { animated, useSpring } from "@react-spring/web";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
        <XMarkIcon
          onClick={() => dispatch(close())}
          className="size-6 absolute top-0 right-0 m-2  z-10 cursor-pointer"
        />
        <div className="glow top-left"></div>
        <div className="glow right-bottom"></div>
        <div className="content relative z-9">
          <div className=" mb-0 xxs:mb-2  flex items-center p-2">
            <img
              className="size-8 xxs:size-12  me-3 rounded-xl"
              src={aboutMeImg}
              alt=""
            />
            <h2 className="heading font-bold text-xl sm:text-2xl">About Me</h2>
          </div>
          <p className=" font-light p-2 rounded-xl text-[0.8rem] sm:text-base text-justify">
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
            <a
              href="./my_curriculum.pdf"
              target="_blank"
              className="pdf-link flex text-[0.8rem] sm:text-base items-center p-2 bg-white text-black max-w-fit rounded-xl me-3"
            >
              Curriculum Vitae
              <ArrowTopRightOnSquareIcon className="size-6 ms-2  mb-1" />
            </a>

            <a
              href="./boolean.pdf"
              target="_blank"
              className="pdf-link flex text-[0.8rem] sm:text-base items-center p-2  bg-white text-black  max-w-fit rounded-xl"
            >
              Boolean Course
              <ArrowTopRightOnSquareIcon className="size-6 ms-2 mb-1" />
            </a>
          </div>
        </div>
      </animated.div>
      <ShowLayover />
    </>
  );
};

export default AboutMeCard;
