import React from 'react'
import { User } from "lucide-react"
import { Button } from './ui/button'
interface CardProps {
    title:string;
    cost:number;
    storage:number;
    users:number;
    send:number;
  order:number
}

export default function Card({title ,cost , storage, users , send , order}:CardProps) {
  return (
    <div className={order!==2 ?"max-w-[1240px] w-full shadow-lg hover:scale-105 duration-300 rounded-lg p-10  mt-8 md:mt-0 my-8  " :"max-w-[1240px] w-full shadow-lg hover:scale-105 duration-300 rounded-lg p-10 bg-gray-200 mt-8 md:mt-0 my-4 "}>

        <User size={60} className={"mx-auto"}/>
        <p className={"font-bold text-center"}>{title}</p>
        <p className={"font-bold py-4 text-center text-2xl"}>${cost}</p>
        <div className={"flex flex-col  justify-center items-center font-medium"}>
            <p className={" font-medium py-2 w-full text-center border-b-[1px] border-b-gray-300 "}>{storage} GB Storage</p>
            <p className={"font-medium py-2 w-full text-center border-b-[1px] border-b-gray-300"}>{users} {users>1 ? "users":"user"} allowed</p>
            <p className={"font-medium py-2 w-full text-center border-b-[1px] border-b-gray-300"}>Send up to {send} GB</p>
            <Button className={order!==2 ?"mx-auto rounded-md text-black py-4 mt-4 mb-4  bg-[#00df9a]":"mx-auto rounded-md bg-black py-4 mt-4 mb-4 text-[#00df9a]"}>
            Start Trial
            
        </Button>
        </div>
       


    </div>
  )
}
