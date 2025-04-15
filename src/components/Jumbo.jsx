import "./Jumbo.css";
import AvatarPc from "../assets/avatar_pc_nobg.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
const Jumbo = () => {
  return (
    <section className="jumbo h-screen">
      <div className="container mx-auto pt-60">
        <img className="max-w-20 bg-white rounded-full" src={AvatarPc} alt="" />
        <h1 className="jumbo-heading text-white">
          Hi I'm Marco,
          <br />
          <span className="text-ms_muted">Junior Web Developer</span>
        </h1>
      </div>
      <div className="scroll flex items-center absolute bottom-0 right-0 m-12 text-ms_muted">
        <span className="uppercase me-2">Scroll</span>
        <ArrowDownIcon className="size-10 arrow-down border p-1 rounded-full  stroke-1" />
      </div>
    </section>
  );
};

export default Jumbo;
