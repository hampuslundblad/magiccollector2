"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Star } from "lucide-react"
import { Button } from "./ui/Button"
import { TableCardData } from "./DataTable"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

 
export const columns: ColumnDef<TableCardData>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    }
  },
  {
    accessorKey: "set",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Set
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    }
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    },
  
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
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Quantity
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    }
  }
]