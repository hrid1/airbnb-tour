"use client";

import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { countries } from "@/config/countries";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { categories } from "@/config/categories";
import { Divide } from "lucide-react";

export default function AddHomeForm() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [HomeCategories, setHomeCategories] = useState<Array<string> | []>

  const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        setImage(file)
    }
  }
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-5 ml-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter Your title ..."></Input>
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="country">Title</Label>
          <select
            id="country"
            className="outline-1 h-10 p-2 rounded-md w-full border"
          >
            <option value="">--Select Country--</option>
            {countries.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" placeholder="Enter Your title ..."></Input>
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter Your title ..."></Input>
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" placeholder="Enter Your title ..."></Input>
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" onChange={handleImageChange} ></Input>
          <span className="text-red-500"></span>
        </div>
      </div>

      <div className="mt-5 ml-2 w-full">
        <Label htmlFor="Description">Description </Label>
        <ReactQuill
          className="w-full"
          theme="snow"
          value={description}
          onChange={setDescription}
        />

        <span className="text-red-500"></span>
      </div>

      <div className="mt-5">
        <Label htmlFor="Label">Category</Label>
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {
           
            categories.map((item) => (
              <div className="flex space-x-4">
                <input type="checkbox" id={item.name} value={item.name} />
                <label className="text-sm font-medium" htmlFor={item.name}>{item.name}</label>
              </div>
            ))
          }
        </div>
      </div>
    </form>
  );
}
