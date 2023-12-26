import exampleData from "./data";
import { columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import { authOptions, getAuthSession } from "@/lib/auth";
import { redirect } from 'next/navigation'


export type CardData = {
  name: string;
  price:string;
  sets: string[];
  image_uri : string
};

const Page = async ({}) => {
  const session = await getAuthSession()
  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }  
  return (
    <>
        <DataTable data={exampleData} columns={columns} />
    </>
  );
};

export default Page;
