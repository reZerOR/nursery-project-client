import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useAddCategoryMutation } from "@/redux/features/category/categoryApi";
import { toast } from "sonner";

type FormData = {
  title: string;
  imgUrl: string;
};

export default function AddCategory() {
  const [isOpen, setIsOpen] = useState(false);
  const [addCategory] = useAddCategoryMutation();

  const form = useForm<FormData>({
    defaultValues: {
      title: "",
      imgUrl: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Here you would typically handle the form submission
    try {
      const result = await addCategory(data);
      console.log(result.error);
      
      if (result.data?.data) {
        toast.success("Succesfully added a category", { duration: 2000 });
      }
    } catch (error) {
        toast.error("Something went wrong, please try again!", {
          duration: 2000,
        });
      console.error(error);
    } finally {
      console.log("Submitted:", data);
      setIsOpen(false);
      form.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="border-primary1 text-primary1 hover:bg-primary1 hover:text-white mb-2"
          variant="outline"
        >
          Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]j">
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new category.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter category title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imgUrl"
              rules={{
                required: "Image URL is required",
                pattern: {
                  value: new RegExp(
                    "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)"
                  ),
                  message: "Please enter a valid URL",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter image URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-primary1 hover:bg-primary1/90" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
