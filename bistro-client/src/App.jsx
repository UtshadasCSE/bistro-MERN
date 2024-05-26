import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/shared/Navbar/Navbar";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  const location = useLocation();
  const hideNavFoot = location.pathname.includes("/login");
  const hideNavFooT = location.pathname.includes("/register");
  console.log(hideNavFoot);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {hideNavFoot || hideNavFooT || <Navbar />}
        <Outlet />
        {hideNavFoot || hideNavFooT || <Footer />}
      </div>
    </>
  );
}

export default App;
