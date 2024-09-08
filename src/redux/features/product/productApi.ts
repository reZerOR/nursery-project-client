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
type Queries = {
  search?: string
}
const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetAllProductsResponse, Queries>({
      query: ({search}) => {
        const searchQuery = search ? `?searchTerm=${search}` : "";
        return { url: `/product${searchQuery}`, method: "GET" };
      },
      providesTags: ["products"],
    }),

    addProduct: builder.mutation({
      query: (data) => {
        return { url: "/product", method: "POST", body: data };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = productApi;
