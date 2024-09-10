import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
const CartWarning = () => {
  const cart = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Check if cart has any products
      if (cart.length > 0) {
        event.preventDefault();
        event.returnValue = "Your cart will be empty!";
      }
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  return null;
};

export default CartWarning;
