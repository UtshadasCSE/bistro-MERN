const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="w-max mx-auto flex flex-col items-center pt-7 pb-5">
        <h4 className="text-[#D99904]">{heading}</h4>
        <div className="divider"></div>
        <h2 className="font-semibold text-3xl">{subHeading}</h2>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
