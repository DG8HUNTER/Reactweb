import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function NewsLetter() {
  return (
   <div className={"w-full py-16 px-4"}>
    <div className={"max-w-[1240px] w-full grid lg:grid-cols-3 text-white "}>
        <div className={"lg:col-span-2"}>
            <h1 className={"font-bold md:text-4xl sm:text-3xl text-2xl py-2"}>
             Want tips & tricks to optimize your flow ?
            </h1>
            <p> Sign up to our newletter and stay up to date</p>

        </div>

        <div className={"my-4"}>
            <div className={"flex flex-col  md:flex-row  items-center "}>
                <input name="Email" placeholder=" Enter your Email" type="email"  className={"py-3 w-full text-black rounded-md px-2  focus:outline-none"}/>
                <Button className={"bg-[#00df9a] text-black rounded-md w-[35%] p-6 ml-4 mt-4 sm:mt-0 font-bold hover:bg-[#00cc8d]"}>Notify me</Button>
            </div>
            <p className={"py-2"}>We care about your protection of your data.Read Our <span className={"text-[#00df9a] underline lg:py-2"}>Privacy Policy</span></p>

        </div>

    </div>
    </div>
  )
}
