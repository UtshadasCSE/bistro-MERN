import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";
import Cover from "../shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";

const Shop = () => {
  const [menu] = useMenu();
  const saladItem = menu.filter((item) => item.category === "salad");
  const pizzaItem = menu.filter((item) => item.category === "pizza");
  const soupItem = menu.filter((item) => item.category === "soup");
  const dessertItem = menu.filter((item) => item.category === "dessert");
  const drinkItem = menu.filter((item) => item.category === "drinks");

  // Pagination for every tab
  const itemPerPgae = 10;
  const numOfPage = Math.ceil(saladItem / itemPerPgae);
  console.log(numOfPage);
  return (
    <div>
      <Helmet>
        <title>Our Shop - Bistro Boss value for food</title>
      </Helmet>
      <Cover
        img={shopImg}
        title={"OUR SHOP"}
        passage={"Would you like to try a dish?"}
      />
      {/* tabs  */}
      <div className="py-9 ">
        <Tabs>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 py-9 font-inter">
              {saladItem.map((item) => (
                <div
                  key={item._id}
                  className="relative card w-96 bg-base-100 shadow-xl"
                >
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
                  <div className="absolute right-3 top-4  ">
                    <h3 className="bg-[#111827] text-white text-xl font-semibold p-3 rounded-md">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            {/* pageniation  */}
            <div className="join">
              <button className="join-item btn">1</button>
              <button className="join-item btn btn-active">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">4</button>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 py-9 font-inter">
              {pizzaItem.map((item) => (
                <div
                  key={item._id}
                  className="relative card w-96 bg-base-100 shadow-xl"
                >
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
                  <div className="absolute right-3 top-4  ">
                    <h3 className="bg-[#111827] text-white text-xl font-semibold p-3 rounded-md">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 py-9 font-inter">
              {soupItem.map((item) => (
                <div
                  key={item._id}
                  className="relative card w-96 bg-base-100 shadow-xl"
                >
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
                  <div className="absolute right-3 top-4  ">
                    <h3 className="bg-[#111827] text-white text-xl font-semibold p-3 rounded-md">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 py-9 font-inter">
              {dessertItem.map((item) => (
                <div
                  key={item._id}
                  className="relative card w-96 bg-base-100 shadow-xl"
                >
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
                  <div className="absolute right-3 top-4  ">
                    <h3 className="bg-[#111827] text-white text-xl font-semibold p-3 rounded-md">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 py-9 font-inter">
              {drinkItem.map((item) => (
                <div
                  key={item._id}
                  className="relative card w-96 bg-base-100 shadow-xl"
                >
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
                  <div className="absolute right-3 top-4  ">
                    <h3 className="bg-[#111827] text-white text-xl font-semibold p-3 rounded-md">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
