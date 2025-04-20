import { useEffect } from "react";
import contactsIcon from "../assets/contacts.png";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../slices/cardSlice";
import PhoneApp from "./PhoneApp";
import ContactsCard from "./ContactsCard";
import { createPortal } from "react-dom";

const Contacts = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cardState.isOpen);

  useEffect(() => {
    const phoneApp = document.querySelector(".phone-app");
    phoneApp.addEventListener("click", () => {
      console.log("click");
      dispatch(open());
    });
  }, []);

  return (
    <section className="contacts">
      <div className="grid grid-cols-3">
        <PhoneApp icon={contactsIcon} title={"Contacts"} />
      </div>
      {createPortal(<ContactsCard visible={isOpen} />, document.body)}
    </section>
  );
};

export default Contacts;
