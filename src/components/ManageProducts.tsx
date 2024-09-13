import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ActionMenu } from "@/pages/Manage";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

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

  
  return (
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
              <ActionMenu />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ManageProducts;
