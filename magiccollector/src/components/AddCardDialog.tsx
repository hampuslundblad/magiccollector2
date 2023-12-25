import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FC } from "react";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import ScryfallSearchInput from "./ScryfallSearchInput";

interface AddCardDialogProps {
  isOpen: boolean;
}

const AddCardDialog: FC<AddCardDialogProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <Dialog>
      <DialogTrigger className={cn("ml-4", buttonVariants({variant:"outline"}))}>Add card</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a card</DialogTitle>
          <DialogDescription>
            Add a card to your collection.
          </DialogDescription>
        </DialogHeader>
        <DialogTitle> Name </DialogTitle>
        <ScryfallSearchInput/>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardDialog;