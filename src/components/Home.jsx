import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loadingState.isLoading);
  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(finishedLoading());
    }, 750);
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
