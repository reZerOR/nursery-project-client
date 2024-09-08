import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";
import { TPlantData } from "@/types";
import { useGetAllCategoryQuery } from "@/redux/features/category/categoryApi";

export default function ProductForm() {
  const { register, handleSubmit, setValue, reset } = useForm<TPlantData>();
  const [addProduct] = useAddProductMutation();
  const { data: category, isLoading } = useGetAllCategoryQuery(undefined);

  const onSubmit = async (data: TPlantData) => {
    const loading = toast.loading("Plant adding", { duration: 2000 });
    try {
      await addProduct(data).unwrap();
      toast.success(`Plan is succesfully added`, {
        id: loading,
        duration: 2000,
      });
      reset();
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toast.error(`${(e as any).data.message}`, {
        id: loading,
        duration: 2000,
      });
      console.error(e);
    }
  };
  return (
    <Card className="max-w-2xl border-none shadow-none my-20 mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">
          Add New <span className="font-libre text-primary1">Plant</span>
        </CardTitle>
        <CardDescription>
          Fill out the details for your new{" "}
          <span className="font-libre font-semibold text-primary1">Plant</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form"
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6"
        >
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter product title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Describe your product"
              {...register("description", { required: true })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="rating">Rating (1-5)</Label>
              <Input
                id="rating"
                type="number"
                min="1"
                max="5"
                placeholder="4.5"
                {...register("rating", {
                  required: true,
                  valueAsNumber: true,
                  min: 0,
                  max: 5,
                })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                placeholder="https://example.com/product.jpg"
                {...register("imageUrl", { required: true })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="19.99"
                {...register("price", { required: true, valueAsNumber: true })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                min="0"
                placeholder="50"
                {...register("quantity", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {category?.data.map((item) => (
                  <SelectItem key={item._id} value={item.title}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button
            form="form"
            type="submit"
            className="bg-primary1 hover:bg-primary1/90"
          >
            Add Plant
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
