import { baseApi } from "@/redux/api/baseApi";

type TCategoryData = {
  _id: string;
  title: string;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
};
type TCommonResponse = {
  success: boolean;
  message: string;
};

interface GetAllProductsResponse extends TCommonResponse {
  data: TCategoryData[];
}
interface AddCategoryResponse extends TCommonResponse {
  data: TCategoryData;
}

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query<GetAllProductsResponse, void>({
      query: () => {
        return { url: "/category", method: "GET" };
      },
      providesTags: ["category"],
    }),

    addCategory: builder.mutation<
      AddCategoryResponse,
      { title: string; imgUrl: string }
    >({
      query: (data) => {
        return { url: "/category", method: "POST", body: data };
      },
      invalidatesTags: ["category"],
    }),

    deleteCategory: builder.mutation<AddCategoryResponse, string>({
      query: (id: string) => {
        return { url: `/category/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
  useAddCategoryMutation,
} = categoryApi;
