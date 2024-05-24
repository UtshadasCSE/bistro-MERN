import Cover from "../shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet";

const Order = () => {
  return (
    <div>
      <Helmet>
        <title>Your Cart - Bistro Boss value for food</title>
      </Helmet>
      <div>
        <Cover
          img={shopImg}
          title={"Your Order"}
          passage={"Would you like to try a dish?"}
        />
      </div>
    </div>
  );
};

export default Order;
