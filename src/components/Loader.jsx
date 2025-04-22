import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import lottieLoader from "../assets/loader.lottie";
const Loader = () => {
  return (
    <div className="loader absolute w-full h-full">
      <DotLottieReact
        className="w-[500px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] "
        src={lottieLoader}
        loop
        autoplay
      />
    </div>
  );
};

export default Loader;
