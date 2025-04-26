import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as contactsJSON from "../assets/contacts.json";
import PhoneApp from "./PhoneApp";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";

const Contacts = () => {
  const contacts = useRef(JSON.parse(JSON.stringify(contactsJSON)).contacts);
  const dispatch = useDispatch();
  const { isLoading, delay } = useSelector((state) => state.loadingState);

  useEffect(() => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(finishedLoading());
    }, delay);
  }, []);
  //the clipboard is rendered in the PhoneApp component, but since is rendered only when route is "/contacts",
  // we can put the logic here
  const handleMouseOver = (e) => {
    const clipboard = e.currentTarget.querySelector(".clipboard");
    clipboard.classList.add("visible");
  };

  const handleMouseLeave = (e) => {
    const clipboard = e.currentTarget.querySelector(".clipboard");
    clipboard.classList.remove("visible");
  };

  const writeClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        //text copied in the clipboard
        console.log("testo copiato");
      })
      .catch((err) => {
        //error while copying the text
        console.log("errore", err);
      });
  };

  return (
    <>
      {/* the loader component "knows" wheter or not be shown */}
      <Loader />
      <section className={`contacts ${isLoading ? "loading" : ""}`}>
        <div className="grid grid-cols-3  ">
          {contacts.current?.map((contact, index) => {
            return (
              <div
                className="contact relative "
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={() => writeClipboard(contact.content)}
                key={index}
              >
                <PhoneApp icon={contact.icon} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Contacts;
