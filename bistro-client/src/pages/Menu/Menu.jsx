import { Helmet } from "react-helmet";
import Cover from "../shared/Cover/Cover";
import menuImg from "../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../shared/MenuItem/MenuItem";
const Menu = () => {
  const [menu] = useMenu();
  const offerMenu = menu.filter((item) => item.category === "offered");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss value for food</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        passage={"Would you like to try a dish?"}
      />
      <SectionTitle heading={"---Don't miss---"} subHeading={"TODAY'S OFFER"} />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 py-5">
        {offerMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center pt-12 pb-4">
        <button className="btn border-b-2 border-b-[#1F2937]">
          View Full Menu
        </button>
      </div>
      <Cover
        img={dessertImg}
        title={"DESSERTS"}
        passage={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 py-5">
        {dessertMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center pt-12 pb-4">
        <button className="btn border-b-2 border-b-[#1F2937]">
          View Full Menu
        </button>
      </div>
      <Cover
        img={dessertImg}
        title={"SALADS"}
        passage={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 py-5">
        {saladMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center pt-12 pb-4">
        <button className="btn border-b-2 border-b-[#1F2937]">
          View Full Menu
        </button>
      </div>
      <Cover
        img={dessertImg}
        title={"SOUPS"}
        passage={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 py-5">
        {soupMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center pt-12 pb-4">
        <button className="btn border-b-2 border-b-[#1F2937]">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
