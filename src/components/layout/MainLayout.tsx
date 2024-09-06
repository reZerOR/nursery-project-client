import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";

const MainLayout = () => {
  return (
    <div className="font-popins">
      <Navbar/>
      <HeroSection/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
