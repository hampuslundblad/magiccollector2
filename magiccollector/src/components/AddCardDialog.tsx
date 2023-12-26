import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC } from "react";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { DialogHeader } from "./ui/dialog";
import { AddCardForm } from "./AddCardForm";

interface AddCardDialogProps {}

const AddCardDialog: FC<AddCardDialogProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn("ml-4", buttonVariants({ variant: "outline" }))}
      >
        Add card
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a card</DialogTitle>
          <DialogDescription>Add a card to your collection.</DialogDescription>
        </DialogHeader>
      
        <AddCardForm/>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardDialog;
