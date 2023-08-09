"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Sheet } from "lucide-react";
import { SheetDemo } from "./SheetDemo";
import Link from "next/link";

export default function NavBar() {
  const [isClicked, setClicked] = useState(false);

  const update = () => {
    setClicked(!isClicked);
  };
  return (
    <nav
      className={
        "flex  justify-between  items-center h-20 p-4 max-w-[1240px] mx-auto "
      }
    >
      <p className={"font-bold text-[#00df9a] text-lg md:text-xl lg:text-2xl"}>REACT.</p>

      <div className={"hidden md:flex text-white"}>
        <ul className={"flex items-center  "}>
          <Link href={""} className={"p-4"}>
            Home
          </Link>
          <Link href={""} className={"p-4"}>
            Account
          </Link>
          <Link href={""} className={"p-4"}>
            Sign In
          </Link>
          <Button className={"text-black bg-white"}>Get Started</Button>
        </ul>
       
      </div>
      {<div className={"flex md:hidden"} onClick={update}>
        {!isClicked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            color="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-align-justify"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="white"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
     
        </div>}
      {isClicked &&  <div className={"transition  ease-in-out duration-500 w-[60%] h-full  fixed  left-0 top-0  bg-[#000300] p-4 md:hidden"}>
      <p className={"font-bold text-[#00df9a] text-md md:text-lg lg:text-xl p-2"}>REACT.</p>
        <ul className={"flex flex-col  items-start text-white uppercase text-sm md:text-md"}>
          <Link href={""} className={"border-b-gray-600 p-4 border-b-2 w-full "}>
            Home
          </Link>
          <Link href={""} className={"border-b-gray-600 p-4 border-b-2 w-full "}>
            Account
          </Link>
          <Link href={""} className={"border-b-gray-600 p-4 border-b-2 w-full "}>
            Sign In
          </Link>
        </ul>


    </div>}

     {/*<div className={"flex hidden:md"}>
        <SheetDemo />
</div>*/}
    </nav>
  );
}
