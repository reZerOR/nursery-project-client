import { Dispatch, SetStateAction } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { buttonStyle } from "@/utils/styles";

type TAlert = {
  deleteConfirmOpen: boolean;
  setDeleteConfirmOpen: Dispatch<SetStateAction<boolean>>;
  confirmDelete: () => void;
};

function ManageAlert({
  deleteConfirmOpen,
  setDeleteConfirmOpen,
  confirmDelete,
}: TAlert) {
  return (
    <AlertDialog
      open={deleteConfirmOpen}
      onOpenChange={(open) => setDeleteConfirmOpen(open)}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this item?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className={buttonStyle}
            onClick={() => setDeleteConfirmOpen(false)}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-500"
            onClick={confirmDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ManageAlert;
