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
  search?: string;
  category?: string;
  sort?: string;
  page?: number;
};
const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetAllProductsResponse, Queries>({
      query: ({ search, category, sort, page = 1 }) => {
        const params = new URLSearchParams();
        console.log(category);
        if (search && search.trim() !== "") params.append("searchTerm", search);
        if (category && category !== "All") params.append("category", category);
        if (sort && sort !== "default") params.append("sort", sort);
        params.append("page", page.toString());
        return { url: `/product?${params.toString()}`, method: "GET" };
      },
      providesTags: ["products"],
    }),

    addProduct: builder.mutation({
      query: (data) => {
        return { url: "/product", method: "POST", body: data };
      },
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (id: string) => {
        return { url: `/product/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation, useDeleteProductMutation } = productApi;
