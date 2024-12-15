"use client"
import { Hero } from "@/components/Home/Hero/Hero";
import { WhyUse } from "@/components/Home/WhyUse/WhyUse";
import Image from "next/image";
import {Navbar} from "@/components/Home/Navbar/Navbar";

  
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow"></main>
        <Hero />
        <WhyUse />
      </div>
    </>
  );
}
