import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import {
  TCategoryData,
  useUpdateCategoryMutation,
} from "@/redux/features/category/categoryApi";
import { useEffect } from "react";

type FormData = {
  title: string;
  imgUrl: string;
};

type UpdateCategoryDialogProps = {
  category: TCategoryData | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
};

export default function UpdateCategoryDialog({
  category,
  isOpen,
  onOpenChange,
  onSuccess,
}: UpdateCategoryDialogProps) {
  const [updateCategory] = useUpdateCategoryMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: category?.title || "",
      imgUrl: category?.imgUrl || "",
    },
  });

  useEffect(() => {
    if (category) {
      reset({
        title: category.title,
        imgUrl: category.imgUrl,
      });
    }
  }, [category, reset]);

  const onSubmit = async (data: FormData) => {
    if (!category) return;
    console.log(data);
    if (category.title === data.title && category.imgUrl === data.imgUrl) {
      return toast.warning("You didnt modified anything", { duration: 2000 });
    }

    try {
      const result = await updateCategory({
        id: category._id,
        body: data,
      });
      if (result.data?.data) {
        toast.success("Successfully updated the Category", { duration: 2000 });
        onOpenChange(false);
        onSuccess();
        reset();
      }
      if (result?.error) {
        toast.error("Something went wrong", { duration: 2000 });
        console.error(result.error)
      }
    } catch (error) {
      toast.error("Something went wrong", { duration: 2000 });
      console.error(error);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => onOpenChange(open)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Category</AlertDialogTitle>
          <AlertDialogDescription>
            Modify the form to update the category
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              {...register("title", { required: "Title is required" })}
              placeholder="Category title"
              defaultValue={category?.title}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="imgUrl">Image URL</Label>
            <Input
              id="imgUrl"
              {...register("imgUrl", { required: "Image URL is required" })}
              placeholder="Image URL"
              defaultValue={category?.imgUrl}
            />
            {errors.imgUrl && (
              <p className="text-red-500 text-sm mt-1">
                {errors.imgUrl.message}
              </p>
            )}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button type="submit">Update Category</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
