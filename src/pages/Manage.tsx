import { useState } from "react";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ManageProducts from "@/components/ManageProducts";

type TActionMenu = {
  handleUpdate: ()=> void,
  handleDelete: ()=>void
}
export const ActionMenu = ({ handleUpdate, handleDelete }: TActionMenu) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-8 w-8 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => handleUpdate()}>
        <Pencil className="mr-2 h-4 w-4" />
        Update
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleDelete()}>
        <Trash className="mr-2 h-4 w-4" />
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function Manage() {
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const categories = [
    { id: 1, img: "/placeholder.svg", title: "Category A" },
    { id: 2, img: "/placeholder.svg", title: "Category B" },
    { id: 3, img: "/placeholder.svg", title: "Category C" },
  ];

  // const handleDelete = (item) => {
  //   setItemToDelete(item)
  //   setDeleteConfirmOpen(true)
  // }

  // const confirmDelete = () => {
  //   // Implement delete logic here
  //   console.log("Deleting item:", itemToDelete);
  //   setDeleteConfirmOpen(false);
  //   setItemToDelete(null);
  // };

  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="products" className="font-popins">
        <TabsList className="">
          <TabsTrigger
            className="data-[state=active]:bg-primary1 data-[state=active]:text-white"
            value="products"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary1 data-[state=active]:text-white"
            value="categories"
          >
            Categories
          </TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <ManageProducts />
        </TabsContent>
        <TabsContent value="categories">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <img
                      src={category.img}
                      alt={category.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell>{category.title}</TableCell>
                  <TableCell>
                    <ActionMenu item={category} type="category" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this item?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              item from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
