const PhoneApp = ({ index, icon, title }) => {
  return (
    <div
      data-index={index !== null ? index : ""}
      className="phone-app flex flex-col  justify-center items-center p-4"
    >
      <img className="w-4/6 h-[50px] object-contain" src={icon} alt="" />
      <h5 className="font-medium text-md text-white mt-2 text-nowrap">
        {title}
      </h5>
    </div>
  );
};

export default PhoneApp;
