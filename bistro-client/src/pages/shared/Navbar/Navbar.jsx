import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/menu"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/cart"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          <FaCartShopping className="text-xl" />
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav>
        <div className="navbar fixed top-0 left-0 right-0 z-10 max-w-screen-xl mx-auto backdrop-blur-md bg-[#15151580] text-white font-semibold">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#15151580] rounded-box w-max"
              >
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl font-cinzel font-black">
              Bistro Boss
            </a>
          </div>
          <div className="navbar-end w-5/6 ">
            <ul className="menu menu-horizontal px-1 max-sm:hidden">
              {navLinks}
            </ul>
            <Link
              to={"/login"}
              className="btn btn-outline  text-white font-semibold border-[#EEFF25]"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
