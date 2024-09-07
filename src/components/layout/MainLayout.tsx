import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import { ImageGallery } from "../ImageGallery";
import ProuductCard from "../ProuductCard";

const MainLayout = () => {
  return (
    <div className="font-popins">
      <Navbar/>
      <HeroSection/>
      <ImageGallery/>
      <ProuductCard/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
