import { ShoppingCart, StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Product } from "@/types";
import { useAppDispatch } from "@/redux/hooks";
import { addCart, TCartProduct } from "@/redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProuductCard = ({ product }: { product: Product }) => {
  const { imageUrl, rating, _id, quantity, price, category, title } = product;
  const dispatch = useAppDispatch();
  const handleCart = () => {
    const cartData: TCartProduct = {
      _id,
      title,
      price,
      category,
      imageUrl,
      availableQuantity: quantity,
    };

    dispatch(addCart(cartData));
  };
  return (
    <Card className="max-w-sm flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Nursery Plant"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="absolute top-2 right-2 bg-white text-primary1 px-3 py-1 rounded-md text-sm font-semibold">
          ${price}
        </div>
      </div>
      <CardContent className="flex flex-col justify-between flex-grow p-4 space-y-2 bg-[#e6f4ea]">
        <div className="flex items-center justify-between">
          <div>
            <Link to={`/products/${_id}`} className="text-lg font-medium">
              {title}
            </Link>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-primary">
          <StarIcon className="w-5 h-5" />
          <span className="text-sm text-muted-foreground">({rating})</span>
        </div>
        <Button
          disabled={quantity === 0}
          onClick={handleCart}
          className="w-full mt-4 flex items-center gap-2 bg-primary1 hover:bg-primary1/90"
        >
          {quantity > 0 ? (
            <>
              <ShoppingCart /> Add to Cart
            </>
          ) : (
            "Out of Stock"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProuductCard;
