import { useEffect, useState } from "react";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
const ItemCard = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div>
      <div>
        <SectionTitle
          heading={"---Should Try---"}
          subHeading={"CHEF RECOMMENDS"}
        />
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 py-9 font-inter">
        {menu.slice(0, 3).map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-[#151515]">{item.recipe}</p>
              <div className="card-actions justify-center w-3/5 mx-auto py-2">
                <button className="btn bg-[#E8E8E8] border-b-2 border-b-[#BB8506] text-[#BB8506]">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
