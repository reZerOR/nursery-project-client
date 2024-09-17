import { baseApi } from "@/redux/api/baseApi";

export type TCategoryData = {
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

type TBody = {
  title : string,
  imgUrl: string
}

type TUpdate = {
  id: string,
  body: TBody
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
      TBody
    >({
      query: (data) => {
        return { url: "/category", method: "POST", body: data };
      },
      invalidatesTags: ["category"],
    }),

    updateCategory: builder.mutation<
      AddCategoryResponse,
      TUpdate
    >({
      query: ({id, body}) => {
        return { url: `/category/${id}`, method: "PUT", body: body };
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
  useUpdateCategoryMutation
} = categoryApi;
