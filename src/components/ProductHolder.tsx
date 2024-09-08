import { containerStyle } from "@/utils/styles";
import ProuductCard from "./ProuductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { Input } from "./ui/input";
import { Product } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import PlanPagination from "./PlanPagination";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "priceLowToHigh", label: "Price: Low to High" },
  { value: "priceHighToLow", label: "Price: High to Low" },
];

const ProductHolder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler); // Clear timeout if the input changes again
    };
  }, [searchTerm]);

  const { data: product, isLoading } = useGetAllProductsQuery({
    search: debouncedSearch,
    category: selectedCategory,
    sort: selectedSort,
  });

  const { data: category } = useGetAllCategoryQuery(undefined);
  // const { data: categories } = useGetAllCategoryQuery(undefined);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product?.data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil((product?.data.length || 0) / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={`${containerStyle}`}>
      <div className="mb-5 flex md:flex-row flex-col gap-5">
        <Input
          type="text"
          placeholder="search by title"
          className="w-full md:max-w-xs"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="w-full flex flex-col sm:flex-row gap-5">
          <Select onValueChange={(value) => setSelectedCategory(value)}>
            <SelectTrigger className="w-full sm:max-w-xs">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"All"}>Default</SelectItem>
              {category?.data.map((item) => (
                <SelectItem key={item._id} value={item.title}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setSelectedSort(value)}>
            <SelectTrigger className="w-full sm:max-w-xs">
              <SelectValue placeholder="Sort by Price" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div
        className={`grid md:grid-cols-3 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-3 max-[480px]:place-items-center lg:gap-5`}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          currentProducts?.map((item: Product) => (
            <ProuductCard key={item._id} product={item} />
          ))
        )}
      </div>
      <PlanPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductHolder;
