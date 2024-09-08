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
  }),
});

export const {useGetAllCategoryQuery} = categoryApi
