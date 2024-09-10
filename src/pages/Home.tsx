import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import { ImageGallery } from "@/components/ImageGallery";
import ProductHolder from "@/components/ProductHolder";

const Home = () => {
  return (
    <div className="mx-auto">
      <HeroSection />
      <ImageGallery />
      <ProductHolder />
      <Categories/>
    </div>
  );
};

export default Home;
