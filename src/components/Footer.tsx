import React from "react";
import  {Facebook , Instagram , Twitter , Github , Dribbble} from "lucide-react"
export default function Footer() {
  return (
    <div className={"w-full py-16  px-4  bg-black text-white"}>
      <div className={"max-w-[1240px] w-full mx-auto grid lg:grid-cols-5 lg:gap-16"}>
        <div className={"flex flex-col items-start lg:col-span-2 py-2"}>
          <p className={"text-[#00df9a] font-bold py-2"}>React.</p>
          <p className={"py-2 w-full"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, unde
            temporibus libero autem veritatis esse dolorum alias, repellat quas
            sequi doloremque distinctio hic veniam cupiditate mollitia incidunt
            quasi voluptatem. Tenetur!F
          </p>
          <div className={" w-[75%] flex justify-between items-center py-4"}>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <Github/>
            <Dribbble/>

          </div>
        </div>
        <div className={"flex flex-row  justify-between items-center lg:col-span-3 text-sm "}>
        <div className={"flex flex-col items-start p-2"}>
        <h6 className={"p-2 text-gray-500 font-medium" }>Solutions</h6>
            <ul>
               
                <li className={"p-2"}>Analysis</li>
                <li className={"p-2"}>Marketing</li>
                <li className={"p-2"}>Commerce</li>
                <li className={"p-2"}>Insights</li>
            </ul>
        </div>

        <div className={"flex flex-col items-start p-2"}>
        <h6 className={"p-2 text-gray-500 font-medium"}>Support</h6>
            <ul>
               
                <li className={"p-2"}>Pricing</li>
                <li className={" hidden p-2 sm:flex "} >Documentation</li>
                <li className={" flex p-2 md:hidden "} >Docs</li>
                <li className={"p-2"}>Guides</li>
                <li className={"p-2 hidden md:flex"}>API Status</li>
                <li className={"p-2 flex md:hidden"}>API </li>
            </ul>
        </div>

        <div className={"flex flex-col items-start p-2"}>
        <h6 className={"p-2 text-gray-500 font-medium"}>Company</h6>
        <ul>
              
                <li className={"p-2"}>About</li>
                <li className={"p-2"}>Blog</li>
                <li className={"p-2"}>Jobs</li>
                <li className={"p-2"}>Press</li>
                
               
            </ul>
        </div>
        <div className={"flex flex-col items-start p-2"}>
        <h6 className={"p-2 text-gray-500 font-medium"}>Legal</h6>
        <ul>
              
                <li className={"p-2"}>Claim</li>
                <li className={"p-2"}>Policy</li>
                <li className={"p-2"}>Terms</li>
                <li className={"p-2"}>License</li>
                
               
            </ul>
        </div>


        </div>

      

      </div>
    </div>
  );
}
