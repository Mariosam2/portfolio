const PhoneApp = ({ index, icon, title }) => {
  return (
    <div
      data-index={index !== null ? index : ""}
      className="phone-app flex flex-col  justify-center items-center pt-4 px-2 xxs:py-2"
    >
      <img className="w-4/6 h-[50px] object-contain" src={icon} alt="" />
      <h5 className="font-medium text-xs xxs:text-base text-white mt-2 text-nowrap">
        {title}
      </h5>
    </div>
  );
};

export default PhoneApp;
