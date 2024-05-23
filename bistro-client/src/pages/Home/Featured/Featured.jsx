import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="py-10 font-inter">
      <div className="py-11 bg-feauterdBg bg-fixed	">
        <div className="w-3/5 mx-auto pb-10">
          <div className="">
            <SectionTitle
              heading={"---Check it out---"}
              subHeading={"FROM OUR MENU"}
            />
          </div>
          <div className="flex max-sm:flex-col gap-11">
            <div className="w-1/2 max-sm:w-full">
              <img src={img} alt="" />
            </div>
            <div className="w-1/2 max-sm:w-full flex flex-col gap-3 items-start">
              <h4 className="text-2xl text-[#FFFFFF]">
                March 20, 2023 WHERE CAN I GET SOME?
              </h4>
              <p className="text-[#FFFFFF]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn border-b-2 border-b-[#BB8506] text-[#BB8506]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
