import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as contactsJSON from "../assets/contacts.json";
import PhoneApp from "./PhoneApp";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";
import { copied, didntCopyYet, errorWhileCopying } from "../slices/copySlice";

const Contacts = () => {
  const contacts = useRef(JSON.parse(JSON.stringify(contactsJSON)).contacts);
  const dispatch = useDispatch();
  const { isLoading, delay } = useSelector((state) => state.loadingState);
  const currentIndex = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      dispatch(finishedLoading());
    }, delay);
  }, []);

  //the clipboard is rendered in the PhoneApp component, but since is rendered only when route is "/contacts",
  // we can put the logic here
  const handleMouseOver = (e) => {
    const clipboard = e.currentTarget.querySelector(".clipboard");
    clipboard.classList.add("visible");
    if (
      currentIndex.current !== null &&
      currentIndex.current !==
        Number(e.currentTarget.getAttribute("data-index"))
    ) {
      const previous = document.querySelector(
        `.contact[data-index="${currentIndex.current}"] .clipboard`
      );
      previous.classList.remove("visible");
      dispatch(didntCopyYet());
    }
  };

  const handleMouseLeave = (e) => {
    console.log("mouse leave");
    if (
      currentIndex.current !==
      Number(e.currentTarget.getAttribute("data-index"))
    ) {
      const clipboard = e.currentTarget.querySelector(".clipboard");
      clipboard.classList.remove("visible");
      dispatch(didntCopyYet());
    }
  };

  const writeClipboard = (text, e) => {
    currentIndex.current = Number(e.currentTarget.getAttribute("data-index"));
    const body = document.body;
    body.style.pointerEvents = "none";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        //text copied in the clipboard
        dispatch(copied());
        setTimeout(() => {
          body.style.pointerEvents = "all";
        }, 500);
      })
      .catch((err) => {
        //error while copying the text
        dispatch(errorWhileCopying());
        setTimeout(() => {
          body.style.pointerEvents = "all";
        }, 500);
      });
  };

  return (
    <>
      {/* the loader component "knows" wheter or not be shown */}
      <Loader />
      <section className={`contacts ${isLoading ? "loading" : ""}`}>
        <div className="grid grid-cols-4 gap-x-1 sm:gap-x-3 ">
          {contacts.current?.map((contact, index) => {
            return (
              <div
                data-index={index}
                className="contact relative "
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => writeClipboard(contact.content, e)}
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
