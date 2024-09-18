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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import UpdateProduct from "@/pages/UpdateProduct";
import { PackageX } from "lucide-react";
import NotFound from "./NotFound";

const headingTitle = [
  "Image",
  "Title",
  "Category",
  "Price",
  "Quantity",
  "Action",
];

const ManageProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});
  const navigate = useNavigate();
  const [deleteProduct] = useDeleteProductMutation();
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleUpdate = (id: string) => {
    setSelectedProductId(id);
    setIsUpdateModalOpen(true);
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
  const isProduct = !isLoading && products?.data.length === 0;

  return (
    <>
      <div className="flex justify-end pr-2 md:pr-0">
        {isProduct || (
          <Button
            onClick={() => navigate("/add-product")}
            variant={"outline"}
            className="border-primary1 text-primary1 hover:bg-primary1 hover:text-white mb-2"
          >
            Add Product
          </Button>
        )}
      </div>
      {isProduct ? (
        <NotFound
          navigateTo="/add-product"
          buttonText="Add plant"
          IconComponent={PackageX}
          title="No plant found!"
          description=" Please check back soon for fresh plants and new arrivals! or you can add plant."
        />
      ) : (
        <div>
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
          <Dialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
            <DialogContent className="max-w-xl rounded-xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Update Product</DialogTitle>
                <DialogDescription>
                  Make changes to your product here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              {selectedProductId && (
                <UpdateProduct
                  id={selectedProductId}
                  onClose={() => setIsUpdateModalOpen(false)}
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default ManageProducts;
