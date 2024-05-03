import Navbar from "@/components/base/Navbar";
import Counter from "@/components/common/Counter";
import Image from "next/image";
import home_img from "@/public/images/home_img.jpeg";
import home_img1 from "@/public/images/home_img1.jpeg";
import React from "react";
import AddHomeForm from "@/components/AddHomeForm";

export default function AddHome() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="bg-green-300">{/* left side */}

            <div>
              <h1 className="text-6xl text-red-500 font-bold">Airbnb Zone</h1>
              <h1 className="text-4xl font-semibold">You could earn</h1>
            </div>
            <div className="flex items-center">
              <Counter></Counter>
              <p className=" font-semibold text-3xl m-1"> per Night</p>
            </div>

            <div className="flex gap-6 mt-4">
              <Image
                src={home_img}
                width={250}
                height={200}
                alt="room1"
                className="rounded object-cover"
              ></Image>
              <Image
                src={home_img1}
                width={250}
                height={200}
                alt="room1"
                className="rounded object-cover"
              ></Image>
            </div>
          </div>

          <div>{/* right side */}
                <AddHomeForm></AddHomeForm>

          </div>
        </div>
      </div>
    </div>
  );
}
