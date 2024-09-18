import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { addCart, TCartProduct } from "@/redux/features/cart/cartSlice";
import { useGetAProductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product } = useGetAProductQuery({ id: id! });
  const dispatch = useAppDispatch();
  if(!product?.data){
    return null
  }
  const { _id, title, price, category, imageUrl, quantity } =
    product?.data as Product;
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
    toast.success("Added to cart", { duration: 2000 });
  };
  // Mock product data

  return (
    <div className="max-w-6xl mx-auto my-10 p-4 md:p-6 lg:p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-square w-full">
          <img
            src={product?.data.imageUrl}
            alt={product?.data.title}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product?.data.title}</h1>
            <Badge variant="secondary" className="text-primary1">
              {product?.data.category}
            </Badge>
          </div>
          <p className="text-gray-600 text-sm">{product?.data.description}</p>
          <div className="flex flex-row-reverse justify-end gap-2">
            <Badge
              variant={
                (product?.data.quantity as number) > 0
                  ? "default"
                  : "destructive"
              }
            >
              {(product?.data.quantity as number) > 0
                ? "In Stock"
                : "Out of Stock"}
            </Badge>
            <span className="text-2xl font-bold">
              ${product?.data.price.toFixed(2)}
            </span>
          </div>
          <Button
            onClick={handleCart}
            disabled={!((product?.data.quantity as number) > 0)}
            size="lg"
            className="w-full md:w-auto flex items-center gap-2"
          >
            <ShoppingCart />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
