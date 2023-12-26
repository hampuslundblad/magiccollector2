"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { FC, useContext, useState } from "react";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import Search from "./Search";
import { AddCardForm } from "./AddCardForm";
import { CardContext } from "@/lib/CardContext";
import { CardData } from "@/app/cards/page";

type CardSearchDialogProps = {
  isOpen: boolean;
};


const CardSearchDialog = ({isOpen} :CardSearchDialogProps) => {
  const [cardData, setCardData] = useState<CardData>()
  console.log(cardData)
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
        <DialogTitle> Name </DialogTitle>
        <Search setCardData={setCardData} />

     { cardData != undefined &&  <AddCardForm name={cardData.name} setDefault={cardData.sets[0]} sets={cardData.sets}/> }
      </DialogContent>
    </Dialog>
  );
};

export default CardSearchDialog;
