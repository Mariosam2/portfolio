import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, delay } = useSelector((state) => state.loadingState);
  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(finishedLoading());
    }, delay);
  }, []);

  const ShowLoader = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return <div>Home</div>;
    }
  };
  return <ShowLoader />;
};

export default Home;
