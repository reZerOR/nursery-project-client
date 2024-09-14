import { baseApi } from "@/redux/api/baseApi";

type TCategoryData = {
  _id: string;
  title: string;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
};

type GetAllProductsResponse = {
  success: boolean;
  message: string;
  data: TCategoryData[];
};

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query<GetAllProductsResponse, void>({
      query: () => {
        return { url: "/category", method: "GET" };
      },
      providesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (id: string) => {
        return { url: `/category/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export const { useGetAllCategoryQuery, useDeleteCategoryMutation } = categoryApi;
