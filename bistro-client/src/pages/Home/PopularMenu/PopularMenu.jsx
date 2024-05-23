import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularMenu = data.filter((item) => item.category === "popular");
  //       setMenu(popularMenu);
  //     });
  // }, []);

  return (
    <div>
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 py-5">
        {popularMenu.map((item) => (
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

export default PopularMenu;
