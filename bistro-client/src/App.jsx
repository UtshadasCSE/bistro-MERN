import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/shared/Navbar/Navbar";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  const location = useLocation();
  const hideNavFoot = location.pathname.includes("/login");
  console.log(hideNavFoot);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {hideNavFoot || <Navbar />}
        <Outlet />
        {hideNavFoot || <Footer />}
      </div>
    </>
  );
}

export default App;
