import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import { ImageGallery } from "../ImageGallery";

const MainLayout = () => {
  return (
    <div className="font-popins">
      <Navbar/>
      <HeroSection/>
      <ImageGallery/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
