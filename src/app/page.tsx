import IconButton from "@/components/IconButton";
import { ModeToggle } from "@/components/ModeToggle";
import { SheetDemo } from "@/components/SheetDemo";
import { Button } from "@/components/ui/button";
import { Phone, MailMinus, Clock , ChevronDown ,  ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image from '../Img/Coding2.jpg';
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Analytics from "@/components/Analytics";
import NewsLetter from "@/components/NewsLetter";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={"bg-[#000300]"}>

<NavBar/>
<Hero/>
<Analytics/>
<NewsLetter/>
<div className={"w-full grid sm:grid-cols-3 sm:gap-8 bg-white py-16 px-6"}>
  <Card title={"Single User"} cost={149} storage={500} users={1} send={20} order={1} />
  <Card title={"Partnership"} cost={199} storage={1000} users={3} send={10} order={2} />
  <Card title={"Group Account"} cost={299} storage={5000} users={10} send={2} order={3} />

</div>
<Footer/>
    </main>
   
  );
}