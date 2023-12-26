"use client"
import { useState } from "react";
import exampleData from "./data";
import { columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import { CardContext } from "@/lib/CardContext";



export type CardData = {
  name: string;
  price:string;
  sets: string[];
  image_uri : string
};

const Page = ({}) => {
  const [cardData, setCardData] = useState<CardData>()
  return (
    <>
      <CardContext.Provider value={{cardData, setCardData}}>
  
        <DataTable data={exampleData} columns={columns} />
      </CardContext.Provider>
    </>
  );
};

export default Page;
