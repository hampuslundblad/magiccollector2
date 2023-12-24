"use client";
import { FC, useState } from "react";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "./ui/table";
import { Card } from "@prisma/client";
import { Star } from "lucide-react";

interface TableProps {
  cards: Card[];
}

const TABLE_HEADINGS = ["Name", "Set", "Foil", "Price", "Quantity"];

const createTableHeadings = () => {
  return TABLE_HEADINGS.map((heading) => <TableHead>{heading}</TableHead>);
};

const BaseTable: FC<TableProps> = ({ cards }) => {
  const [editingCard, setEditingCard] = useState<Card | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //function to create a table row
  const createTableRow = (data: Card) => {
    return (
      <TableRow onClick={() => handleEditClick(data)}>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.set}</TableCell>
        <TableCell>{data.foil ? <Star /> : null}</TableCell>
        <TableCell>{data.price}</TableCell>
        <TableCell>{data.quantity}</TableCell>
      </TableRow>
    );
  };

  const handleEditClick = (card: Card) => {
    console.log(card);
    setEditingCard(card);
    setIsModalOpen(true);
  };

  return (
    <Table>
      <TableCaption>A list of your your cards</TableCaption>
      <TableHeader>
        <TableRow>{createTableHeadings()}</TableRow>
      </TableHeader>
      <TableBody>{cards.map((card) => createTableRow(card))}</TableBody>
    </Table>
  );
};

export default BaseTable;
