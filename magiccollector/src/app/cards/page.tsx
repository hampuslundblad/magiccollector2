"use client"
import BaseTable from "@/components/BaseTable";
import { FC, createContext, useState } from "react";
import exampleData from "./data";
import { columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/Button";
import { CardContext } from "@/lib/CardContext";

interface pageProps {}

export type CardData = {
  name: string;
  price:string;
  sets: string[];
  image_uri : string
};

const page: FC<pageProps> = ({}) => {
  const [cardData, setCardData] = useState<CardData>()
  return (
    <>
      <CardContext.Provider value={{cardData, setCardData}}>
        <DataTable data={exampleData} columns={columns} />
      </CardContext.Provider>
    </>
  );
};

export default page;
