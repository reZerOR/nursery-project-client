import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import { containerStyle } from "@/utils/styles";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteProduct, updateCart } from "@/redux/features/cart/cartSlice";
import Heading from "@/components/Heading";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  return (
    <div className={`${containerStyle} mb-20`}>
      <Heading text="Your Shopping Cart" />
      {cart.products?.map((item, index) => (
        <Card key={index} className="mb-4">
          <CardContent className="flex items-center p-4">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-24 h-24 object-cover mr-4"
            />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">
                  ${item.price.toFixed(2)}
                </p>
                <Trash
                  onClick={() => dispatch(deleteProduct(item._id))}
                  className="h-4 w-4 font-semibold cursor-pointer text-primary1"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  dispatch(updateCart({ productId: item._id, type: "dec" }))
                }
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4 text-primary1" />
              </Button>
              <span className="mx-2 text-lg font-semibold">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  dispatch(updateCart({ productId: item._id, type: "inc" }))
                }
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4 text-primary1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="mt-8 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          Total: ${cart.total.toFixed(2)}
        </div>
        <Button onClick={()=> navigate('/checkout')} size="lg" className="px-8 bg-primary1 hover:bg-primary1/80">
          <ShoppingCart className="mr-2 h-5 w-5" /> Checkout
        </Button>
      </div>
    </div>
  );
}
