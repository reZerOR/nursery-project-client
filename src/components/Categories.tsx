import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { containerStyle } from "@/utils/styles";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categories } = useGetAllCategoryQuery(undefined);

  const [api, setApi] = useState<CarouselApi>();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setNext(api.canScrollNext());
      setPrev(api.canScrollPrev());
    });
  }, [api]);

  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);
  return (
    <div>
      <Heading text="Shop by Category" />
      <div className={`${containerStyle}`}>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className={``}
        >
          <CarouselContent>
            {categories?.data.map((category, index) => (
              <CarouselItem key={index} className="md:basis-1/3 xl:basis-1/5">
                <Card
                  key={category._id}
                  className="overflow-hidden bg-primary1/10"
                >
                  <CardContent className="p-2">
                    <img
                      src={category.imgUrl}
                      alt={category.title}
                      width={150}
                      height={100}
                      className="w-full h-24 object-cover rounded-sm"
                    />
                    <Link
                      to={`/products?category=${encodeURIComponent(category.title)}`}
                      className="font-medium flex justify-center text-sm mt-2"
                    >
                      {category.title}
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-end items-center space-x-2 mt-2 mr-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-primary1 border-2"
            onClick={handlePrevious}
            disabled={!prev}
          >
            <MoveLeft className="h-4 w-4 text-primary1" size={32} />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-primary1 border-2"
            onClick={handleNext}
            disabled={!next}
          >
            <MoveRight className="h-4 w-4 text-primary1" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
