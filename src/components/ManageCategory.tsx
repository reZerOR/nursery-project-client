import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";
import { useState } from "react";
import ManageAlert from "./ManageAlert";
import { ActionMenu } from "./ManageAction";
import AddCategory from "./AddCategory";

const categoryHeadings = ["Image", "Title", "Action"];

const ManageCategory = () => {
  const { data: categories } = useGetAllCategoryQuery(undefined);

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleUpdate = () => {
    return;
  };

  const handleDelete = () => {
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
                  handleUpdate={handleUpdate}
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
    </>
  );
};

export default ManageCategory;
