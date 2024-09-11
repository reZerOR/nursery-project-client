import { baseApi } from "@/redux/api/baseApi";

interface ShippingAddress {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  interface OrderItem {
    product: string;  // Assuming it's the product ID
    quantity: number;
    price: number;
  }

  export type TOrder = {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    shippingAddress: ShippingAddress;
    items: OrderItem[];
    totalAmount: number;
    paymentMethod: string;
  }
  
  interface Order {
    success: boolean;
    message: string;
    data: {
      customerName: string;
      customerEmail: string;
      customerPhone: string;
      shippingAddress: ShippingAddress;
      items: OrderItem[];
      totalAmount: number;
      paymentMethod: string;
      isPaid: boolean;
      _id: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  }
const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation<Order, TOrder>({
      query: (data) => {
        return { url: `/order`, method: "POST", body: data};
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useAddOrderMutation } = productApi;
