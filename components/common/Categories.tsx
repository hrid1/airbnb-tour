import { categories } from "@/config/categories";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

export default function Categories() {
  return (
    <div className="flex items-center space-x-8  px-10 pb-4 whitespace-nowrap overflow-x-auto">
      {categories.map((item) => (
        <div className="flex flex-col items-center">
          <Image src={item.icon} width={40} height={40} alt={item.name}></Image>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
