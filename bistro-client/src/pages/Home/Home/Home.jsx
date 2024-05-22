import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import ItemCard from "../ItemCard/ItemCard";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <AboutBistro />
      <PopularMenu />
      {/* call us  */}
      <div className="py-16">
        <div className="py-24 bg-black text-white flex justify-center">
          <h2 className="text-4xl font-cinzel font-semibold">
            Call Us: +88 0192345678910
          </h2>
        </div>
      </div>
      {/* call us  */}
      <ItemCard />
      <Featured />
    </div>
  );
};

export default Home;
