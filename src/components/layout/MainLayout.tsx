import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
const MainLayout = () => {
  return (
    <div className="font-popins">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
