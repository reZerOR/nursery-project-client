import { ArrowRight } from "lucide-react";
import BlurIn from "./megicUi/BlurIn";
import { Link } from "react-router-dom";
const word = ["Bring Your Nursery", "to Life", "with Our Plants"];

function HeroSection() {
  return (
    <div className="bg-[url('/background2.webp')] bg-cover flex items-center justify-center bg-no-repeat bg-center h-[calc(100dvh-72px)]">
      <div>
        <div className="mb-5">
          {word.map((item, index) => (
            <BlurIn
              key={index}
              word={item}
              className={`font-libre text-center text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-100`}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to={"#"}
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-semibold text-white border-2 border-white rounded-full hover:text-[#557C56] group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <ArrowRight />
            </span>
            <span className="relative">Discover</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
