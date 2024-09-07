import { containerStyle } from "@/utils/styles";
import { ShoppingCart, StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ProuductCard = () => {
  const product = {
    id: "10",
    title: "Tulip Bulbs",
    description:
      "Premium quality tulip bulbs, available in a variety of colors.",
    price: 9.99,
    quantity: 80,
    category: "Seeds & Bulbs",
    rating: 4.7,
    imageUrl:
      "https://i.ibb.co.com/xzCfs0y/when-to-deadhead-hydrangeas-getty-0423-3ad369e116eb4c71818fdbe4b9b23160.jpg",
    createdAt: "2024-09-07T13:05:00Z",
    updatedAt: "2024-09-07T13:05:00Z",
  };
  const array = [1, 2, 3, 4, 5, 7];
  return (
    <div
      className={`${containerStyle} grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-3 lg:gap-5`}
    >
      {array.map((item) => (
        <Card
          key={item}
          className="max-w-sm overflow-hidden rounded-lg shadow-lg"
        >
          <div className="relative">
            <img
              src={product.imageUrl}
              alt="Nursery Plant"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="absolute top-2 right-2 bg-white text-primary1 px-3 py-1 rounded-md text-sm font-semibold">
              ${product.price}
            </div>
          </div>
          <CardContent className="p-4 space-y-2 bg-[#e6f4ea]">
            <div className="flex items-center justify-between">
              <div className="">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <StarIcon className="w-5 h-5" />
              <span className="text-sm text-muted-foreground">
                ({product.rating})
              </span>
            </div>
            <Button
              disabled={product.quantity === 0}
              className="w-full mt-4 flex items-center gap-2 bg-primary1 hover:bg-primary1/90"
            >
              {product.quantity > 0 ? (
                <>
                  <ShoppingCart /> Add to Cart
                </>
              ) : (
                "Out of Stock"
              )}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProuductCard;
