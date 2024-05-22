import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/shared/Navbar/Navbar";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
