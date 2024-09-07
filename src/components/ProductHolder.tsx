import { containerStyle } from "@/utils/styles";
import ProuductCard from "./ProuductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

const ProductHolder = () => {
  const { data: product, isLoading } = useGetAllProductsQuery(undefined);
  console.log(isLoading);

  console.log(product);
  return (
    <div
      className={`${containerStyle} grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-3 lg:gap-5`}
    >
      {product?.data.map((item) => (
        <ProuductCard key={item._id} product={item} />
      ))}
    </div>
  );
};

export default ProductHolder;
