import React from "react";
import Laptop from "../Img/analytics.png";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Analytics() {
  return (
    <div className={"w-full bg-white px-4 py-16"}>
      <div className={"max-w-[1240px] w-full mx-auto grid md:grid-cols-2  "}>
        <Image src={Laptop} alt={""} width={250} height={250} className="md:mx-auto" />

        <div className={"flex flex-col justify-center "}>
          <p className={"uppercase text-[#00df9a] font-bold mt-4 md:mt-0 "}>Data Analysics Dashboard</p>
          <h1 className={"md:text-2xl  sm:text-3xl text-xl font-bold py-2"}>Manage Data Analysics Center</h1>
          <p className={""}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            voluptas ducimus inventore eveniet modi harum fuga perferendis
            tenetur aspernatur, ea omnis hic soluta quos voluptates quasi
            reprehenderit dolorum unde sint?
          </p>
          <Button  className={
          "bg-[#00df9a] text-black  font-bold  text-medium  w-[35%] py-4 mt-4 mx-auto md:mx-0 "
        } >Get Started</Button>
        </div>
      </div>
    </div>
  );
}
