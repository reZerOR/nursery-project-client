import { baseApi } from "@/redux/api/baseApi";

// The Product type
type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

// The API response type
type GetAllProductsResponse = {
  success: boolean;
  message: string;
  data: Product[];
};

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetAllProductsResponse, void>({
      query: () => {
        return { url: "/product", method: "GET" };
      },
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
