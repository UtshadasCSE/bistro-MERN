import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      />
      <div className="grid grid-cols-2 gap-6 py-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
