const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div>
      <div className="flex max-sm:flex-col gap-7 font-inter max-sm:w-4/5 mx-auto">
        <div>
          <img
            className="rounded-full rounded-tl-none w-44 "
            src={image}
            alt=""
          />
        </div>
        <div>
          {" "}
          <h2 className="font-cinzel text-xl">{name} ------------------</h2>
          <p className="text-[#737373]">{recipe}</p>
        </div>
        <div>
          <p className="text-[#BB8506] text-xl font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
