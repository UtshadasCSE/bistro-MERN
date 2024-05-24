import { FaPhoneAlt } from "react-icons/fa";

import Cover from "./../shared/Cover/Cover";
import coverImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div>
      <Cover
        img={coverImg}
        title={"CONTACT US"}
        passage={"Would you like to try a dish?"}
      />
      <SectionTitle heading={"---Visit Us---"} subHeading={"OUR LOCATION"} />
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 pb-8">
        {/* child  */}
        <div className=" p-5 flex flex-col font-inter ">
          <div className="bg-[#D1A054] p-4 flex justify-center">
            <FaPhoneAlt className="text-white text-xl font-semibold" />
          </div>
          <div className="border-[1rem] border-t-0 border-[#FFF] bg-[#F3F3F3] flex flex-col items-center p-8">
            <h2>PHONE</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        {/* child  */}
        <div className=" p-5 flex flex-col font-inter">
          <div className="bg-[#D1A054] p-4">
            <h3 className="text-white text-center ">Phone</h3>
          </div>
          <div className="border-[1rem] border-t-0 border-[#FFF] bg-[#F3F3F3] flex flex-col items-center p-8">
            <h2>ADDRESS</h2>
            <p>Mirpu-1,Dhaka</p>
          </div>
        </div>
        {/* child  */}
        <div className=" p-5 flex flex-col font-inter">
          <div className="bg-[#D1A054] p-4">
            <h3 className="text-white text-center ">Phone</h3>
          </div>
          <div className="border-[1rem] border-t-0 border-[#FFF] bg-[#F3F3F3] flex flex-col items-center p-8">
            <h2>WORKING HOURS</h2>
            <p>Mon - Fri: 08:00 - 22:00 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
