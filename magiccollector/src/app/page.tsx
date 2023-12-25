import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1 className="font-bolt text-3xl md:text-4xl">Your page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
      
        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
          <div className="bg-emerald-100 px-6 py-4">
            <p className="font-semibold py-3 flex items-center gap-1.5">Home</p>
          </div>
        </div>
        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
          <Link href="/cards">
          <div className="bg-emerald-100 px-6 py-4">
            <p className="font-semibold py-3 flex items-center gap-1.5">Your cards</p>
          </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
