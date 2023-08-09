"use client";

import React from "react";
import Typed from "react-typed";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div
      className={
        "max-w-[800px] w-full h-screen mt-[-80px] mx-auto flex flex-col  justify-center items-center "
      }
    >
      <p
        className={
          "uppercase text-[#00df9a]  text-bold p-2 text-md md:text-xl lg:text-2xl"
        }
      >
        Growing with data analysis
      </p>
      <h1
        className={"text-white text-bold  md:text-7xl sm:text-6xl text-4xl p-2"}
      >
        Grow with data
      </h1>
      <div className={"flex"}>
        <p
          className={
            "text-xl md:text-5xl sm:text-4xl  text-bold text-white p-2"
          }
        >
          Fast,Flexible financing for
        </p>
        <Typed className={"text-xl md:text-5xl sm:text-4xl  text-bold text-white p-2"} strings={["BTB","BTC","SASS"]} typeSpeed={120} backSpeed={140} loop/>
      </div>
      <p
        className={
          "md:text-xl text-md  lg:2xl font-bold text-gray-500 text-center p-2  sm:w-[70%]"
        }
      >
       Monitor your data analysis to increase revenue for BTB,BTC,&SASS platforms.
      </p>
      <Button
        className={
          "bg-[#00df9a] text-black  font-bold  text-medium  w-[20%] py-5 my-[5%]  "
        }
      >
        SUBMIT
      </Button>
    </div>
  );
}
