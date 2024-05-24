import { useEffect, useState } from "react";
import axios from "axios";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3000/menu").then((data) => {
      setLoading(false);
      setMenu(data.data);
    });
  }, []);
  return [menu, loading];
};
export default useMenu;
