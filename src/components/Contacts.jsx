import { useEffect, useState } from "react";
import contactsIcon from "../assets/contacts.png";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../slices/cardSlice";
import PhoneApp from "./PhoneApp";
import ContactsCard from "./ContactsCard";
import { createPortal } from "react-dom";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loadingState.isLoading);
  const [isComponentReady, setIsComponentReady] = useState(false);

  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(finishedLoading());
      setIsComponentReady(true);
    }, 750);
  }, []);

  useEffect(() => {
    if (isComponentReady) {
      const phoneApp = document.querySelector(".phone-app");

      phoneApp.addEventListener("click", () => {
        console.log("click");
        dispatch(open());
      });
    }
  }, [isComponentReady]);

  const ShowLoader = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <section className="contacts">
          <div className="grid grid-cols-3">
            <PhoneApp icon={contactsIcon} title={"Contacts"} />
          </div>
          {createPortal(<ContactsCard />, document.body)}
        </section>
      );
    }
  };

  return <ShowLoader />;
};

export default Contacts;
