import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import ManageAlert from "./ManageAlert";
import { useState } from "react";
import { ActionMenu } from "./ManageAction";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const headingTitle = [
  "Image",
  "Title",
  "Category",
  "Price",
  "Quantity",
  "Action",
];

const ManageProducts = () => {
  const { data: products } = useGetAllProductsQuery({});
  const navigate = useNavigate();
  const [deleteProduct] = useDeleteProductMutation();
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleUpdate = (id: string) => {
    navigate(`/update-product/${id}`);
  };

  const handleDelete = async () => {
    // Perform the deletion logic here
    try {
      const result = await deleteProduct(selectedProduct);
      if (result?.data?.data) {
        toast.success("Succesfully deleted product", { duration: 2000 });
      }
    } catch (e) {
      console.error(e);

      toast.error("Something went wrong", {
        duration: 2000,
      });
    } finally {
      setDeleteConfirmOpen(false);
    }
  };

  const confirmDelete = (id: string) => {
    setSelectedProduct(id);
    setDeleteConfirmOpen(true);
  };

  return (
    <>
      <div className="flex justify-end pr-2 md:pr-0">
        <Button
          onClick={() => navigate("/add-product")}
          variant={"outline"}
          className="border-primary1 text-primary1 hover:bg-primary1 hover:text-white mb-2"
        >
          Add Product
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {headingTitle.map((item) => (
              <TableHead key={item}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.data.map((product) => (
            <TableRow key={product._id}>
              <TableCell>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-10 h-10 object-cover rounded"
                />
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                <ActionMenu
                  handleUpdate={() => handleUpdate(product._id)}
                  handleDelete={() => confirmDelete(product._id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ManageAlert
        confirmDelete={handleDelete}
        deleteConfirmOpen={deleteConfirmOpen}
        setDeleteConfirmOpen={setDeleteConfirmOpen}
      />
    </>
  );
};

export default ManageProducts;
