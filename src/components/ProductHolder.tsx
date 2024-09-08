import { containerStyle } from "@/utils/styles";
import ProuductCard from "./ProuductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { Input } from "./ui/input";
import { Product } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";

const ProductHolder = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // State to track the user's input
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500); // 500ms delay for debouncing

    return () => {
      clearTimeout(handler); // Clear the timeout on each re-render if searchTerm changes
    };
  }, [searchTerm]);
  const { data: product, isLoading } = useGetAllProductsQuery({
    search: debouncedSearch,
  });
  console.log(isLoading);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update searchTerm with input
  };

  console.log(product);
  return (
    <div className={`${containerStyle}`}>
      <div className="mb-5">
        <Input
          type="text"
          placeholder="search by title"
          className="max-w-xs"
          onChange={handleInputChange}
        />
      </div>
      <div
        className={`grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-3 lg:gap-5`}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          product?.data.map((item: Product) => (
            <ProuductCard key={item._id} product={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductHolder;
