import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild >
        <Button variant="ghost" size={"icon"}>
          <p className={"sr-only"}>menu</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  color={"white"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
        </Button>
      </SheetTrigger>
      <SheetContent  side={"left"} className={"bg-[#000300]"}  >
        <div className="gap-4 py-4 text-white  flex flex-col items-start">
        <p className={"font-bold text-[#00df9a] text-[20px] "}>REACT.</p>
        <Link href={""} className={"p-4 "}>Home</Link>
            <Link href={""} className={"p-4"}>Account</Link>
            <Link href={""} className={"p-4"}>Sign In</Link>
            <Link href={""} className={"p-4"}>Get Started</Link>
        </div>
       
      </SheetContent>
    </Sheet>
  );
}
