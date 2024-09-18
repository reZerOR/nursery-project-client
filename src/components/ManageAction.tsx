import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type TActionMenu = {
    handleUpdate: () => void;
    handleDelete: () => void;
  };
  export const ActionMenu = ({ handleUpdate, handleDelete }: TActionMenu) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="text-primary1" onClick={() => handleUpdate()}>
          <Pencil className="mr-2 h-4 w-4" />
          Update
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600" onClick={() => handleDelete()}>
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );