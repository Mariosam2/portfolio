import "./Contacts.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as contactsJSON from "../assets/contacts.json";
import PhoneApp from "./PhoneApp";
import { finishedLoading, loading } from "../slices/loadingSlice";
import Loader from "./Loader";
import { ClipboardIcon } from "@heroicons/react/24/outline";

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

  const handleMouseOver = (e) => {
    const clipboard = e.currentTarget.querySelector(".clipboard");
    clipboard.classList.add("visible");
  };

  const handleMouseLeave = (e) => {
    const clipboard = e.currentTarget.querySelector(".clipboard");
    clipboard.classList.remove("visible");
  };

  return (
    <>
      {/* the loader component "knows" wether or not be shown */}
      <Loader />
      <section className={`contacts ${isLoading ? "loading" : ""}`}>
        <div className="grid grid-cols-3  ">
          {contacts.current?.map((contact, index) => {
            return (
              <div
                className="contact relative "
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                key={index}
              >
                <PhoneApp icon={contact.icon} />
                <div className="clipboard  h-[48px] xxs:h-[55px] grid place-items-center">
                  <ClipboardIcon className="size-8" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Contacts;
