import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as contactsJSON from "../assets/contacts.json";
import PhoneApp from "./PhoneApp";
import { finishedLoading } from "../slices/loadingSlice";
import Loader from "./Loader";

const Contacts = () => {
  const contacts = useRef(JSON.parse(JSON.stringify(contactsJSON)).contacts);
  const dispatch = useDispatch();
  const { isLoading, delay } = useSelector((state) => state.loadingState);

  useEffect(() => {
    setTimeout(() => {
      dispatch(finishedLoading());
    }, delay);
  }, []);

  const ShowContact = ({ contactObj }) => {
    if (contactObj.name === "mail" || contactObj.name === "github") {
      return (
        <a
          className="
          contact relative"
          href={
            contactObj.name === "mail"
              ? `mailto:${contactObj.content}`
              : contactObj.content
          }
          target="_blank"
        >
          <PhoneApp icon={contactObj.icon} title={contactObj.name} />
        </a>
      );
    } else {
      return (
        <div
          className="
        contact relative"
        >
          <PhoneApp icon={contactObj.icon} discordId={contactObj.content} />
        </div>
      );
    }
  };

  return (
    <>
      {/* the loader component "knows" wheter or not be shown */}
      <Loader />
      <section className={`contacts ${isLoading ? "loading" : ""}`}>
        <div className="grid grid-cols-4 gap-x-1 sm:gap-x-3 ">
          {contacts.current?.map((contact, index) => {
            return <ShowContact key={index} contactObj={contact} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Contacts;
