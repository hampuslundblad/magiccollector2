import BaseTable from "@/components/BaseTable";
import { FC } from "react";
import exampleData from "./data";
import { columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>  
      <DataTable data={exampleData} columns={columns} />
    </>
  );
};

export default page;
