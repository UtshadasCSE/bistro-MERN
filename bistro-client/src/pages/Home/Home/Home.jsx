import { Helmet } from "react-helmet";
import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import ItemCard from "../ItemCard/ItemCard";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss - value for food</title>
      </Helmet>
      <Banner />
      <Category />
      <AboutBistro />
      <PopularMenu />
      {/* call us  */}
      <div className="py-16">
        <div className="py-24 bg-black text-white flex justify-center">
          <h2 className="text-4xl max-sm:text-2xl font-cinzel font-semibold">
            Call Us: +88 0192345678910
          </h2>
        </div>
      </div>
      {/* call us  */}
      <ItemCard />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
