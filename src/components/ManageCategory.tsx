import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { TCategoryData, useDeleteCategoryMutation, useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import { useState } from "react";
import ManageAlert from "./ManageAlert";
import { ActionMenu } from "./ManageAction";
import AddCategory from "./AddCategory";
import { toast } from "sonner";
import UpdateCategoryDialog from "./UpdateCategory";

const categoryHeadings = ["Image", "Title", "Action"];

const ManageCategory = () => {
  const { data: categories } = useGetAllCategoryQuery(undefined);
  const [deleteCategory] = useDeleteCategoryMutation()

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [aCategory, setACategory] = useState<TCategoryData| null>(null)

  const handleUpdate = (category:TCategoryData) => {
    console.log(category);
    
    setACategory(category)
    setUpdateDialogOpen(true)
  }

  const handleDelete = async() => {
    try {
      const result = await deleteCategory(selectedCategory)
      if(result.data?.data){
        toast.success('Successfully deleted a Category', {duration: 2000})
      }
    } catch (error) {
      toast.error('Something went error', {duration: 2000})
      console.error(error);
      
    }
    // Perform the deletion logic here
    console.log("Deleting category:", selectedCategory);
    setDeleteConfirmOpen(false);
  };

  const confirmDelete = (id: string) => {
    setSelectedCategory(id);
    setDeleteConfirmOpen(true);
  };
  return (
    <>
    <div className="flex justify-end pr-2 md:pr-0">
    <AddCategory />
    </div>
      <Table>
        <TableHeader>
          <TableRow>
            {categoryHeadings.map((item) => (
              <TableHead key={item}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories?.data.map((category) => (
            <TableRow key={category._id}>
              <TableCell>
                <img
                  src={category.imgUrl}
                  alt={category.title}
                  className="w-10 h-10 object-cover rounded"
                />
              </TableCell>
              <TableCell>{category.title}</TableCell>
              <TableCell>
                <ActionMenu
                  handleUpdate={()=>handleUpdate(category)}
                  handleDelete={() => confirmDelete(category._id)}
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
      <UpdateCategoryDialog
        category={aCategory}
        isOpen={updateDialogOpen}
        onOpenChange={setUpdateDialogOpen}
        onSuccess={() => {
          setACategory(null)
        }}
      />
    </>
  );
};

export default ManageCategory;
