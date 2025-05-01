import { useSelector } from "react-redux";
import "./Loader.css";
const Loader = () => {
  const { isLoading } = useSelector((state) => state.loadingState);
  return (
    <div
      className={`loader-container ${
        isLoading ? "block" : "hidden"
      } absolute top-1/2  left-1/2 translate-x-[-50%] translate-y-[-50%] p-4`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
