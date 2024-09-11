import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { containerStyle } from "@/utils/styles";
import { useAppSelector } from "@/redux/hooks";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { clearCart, updateCart } from "@/redux/features/cart/cartSlice";
import { TOrder, useAddOrderMutation } from "@/redux/features/Order/orderApi";
import { toast } from "sonner";

interface CheckoutFormInputs {
  name: string;
  phoneNumber: string;
  email: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormInputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addOrder] = useAddOrderMutation();
  const { data: productsData } = useGetAllProductsQuery({});
  const cartProducts = useAppSelector((state) => state.cart);

  const onSubmit: SubmitHandler<CheckoutFormInputs> = async (data) => {
    setIsSubmitting(true);
  
    // Check and adjust cart quantities
    let quantitiesAdjusted = false;
    cartProducts.products.forEach((cartProduct) => {
      const actualProduct = productsData?.data.find(
        (p) => p._id === cartProduct._id
      );
      if (actualProduct && cartProduct.quantity! > actualProduct.quantity) {
        dispatch(
          updateCart({
            productId: cartProduct._id,
            type: "set",
            quantity: actualProduct.quantity,
          })
        );
        quantitiesAdjusted = true;
      }
    });
  
    if (quantitiesAdjusted) {
      toast.info("Some product quantities in your cart have been adjusted due to availability.", {
        description: "Please review your cart before proceeding.",
        duration: 5000, // Set duration to 5 seconds
      });
      setIsSubmitting(false);
      return navigate("/cart");
    }
  
    const orderData: TOrder = {
      customerName: data.name,
      customerEmail: data.email,
      customerPhone: data.phoneNumber,
      shippingAddress: {
        street: data.street,
        city: data.city,
        postalCode: data.postalCode,
        country: data.country,
        state: data.state,
      },
      items: cartProducts.products.map((product) => ({
        product: product._id,
        quantity: product.quantity!,
        price: product.price,
      })),
      totalAmount: cartProducts.total,
      paymentMethod: "Cash on Delivery",
    };
  
    try {
      // Add order
      const result = await addOrder(orderData).unwrap();
  
      if (result.success) {
        // Clear the cart
        dispatch(clearCart());
  
        toast.success("Order placed successfully!", {
          description: "Thank you for your purchase.",
          duration: 4000, // Set duration to 4 seconds
        });
  
        // Navigate to home page
        navigate("/");
      } else {
        toast.error("Failed to place order. Please try again.", {
          duration: 4000, // Set duration to 4 seconds
        });
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred while placing your order. Please try again.", {
        duration: 5000, // Set duration to 5 seconds
      });
    }
  };

  return (
    <div className={`${containerStyle} my-20 max-w-2xl`}>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="text"
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                placeholder="01303164505"
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                {...register("street", {
                  required: "Street address is required",
                })}
                placeholder="123 Main St"
              />
              {errors.street && (
                <p className="text-sm text-red-500">{errors.street.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  {...register("city", { required: "City is required" })}
                  placeholder="New York"
                />
                {errors.city && (
                  <p className="text-sm text-red-500">{errors.city.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  {...register("state", { required: "State is required" })}
                  placeholder="NY"
                />
                {errors.state && (
                  <p className="text-sm text-red-500">{errors.state.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                  placeholder="10001"
                />
                {errors.postalCode && (
                  <p className="text-sm text-red-500">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  {...register("country", { required: "Country is required" })}
                  placeholder="United States"
                />
                {errors.country && (
                  <p className="text-sm text-red-500">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Payment Method</Label>
              <RadioGroup
                defaultValue="cash"
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" checked disabled />
                  <Label htmlFor="cash">Cash on Delivery</Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary1 hover:bg-primary1/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
