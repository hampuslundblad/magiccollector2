"use client"
 
import { Card } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Star } from "lucide-react"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

 
export const columns: ColumnDef<Card>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "set",
    header: "Set",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey:"foil",
    header:"Foil",
    cell: ({ row }) => {
        return row.getValue("foil") ? <Star/> : null
    }
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  }
]