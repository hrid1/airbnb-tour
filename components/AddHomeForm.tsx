"use client";

import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { countries } from "@/config/countries";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { categories } from "@/config/categories";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddHomeType, homeSchema } from "@/validations/formSchema";
import { Button } from "./ui/button";

export default function AddHomeForm() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [HomeCategories, setHomeCategories] = useState<Array<string> | []>([]);


  // validation s

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<AddHomeType>({
    resolver: yupResolver(homeSchema),
  });

  useEffect(() => {

    setValue("categories", HomeCategories)
    setValue("description", description)

  } , [HomeCategories, categories])


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setValue("image", file)
    }
  };


  const onSubmit = async (payload: AddHomeType) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-5 ml-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter Your title here..." {...register('title')} ></Input>
          <span className="text-red-500"> {errors?.title?.message} </span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="country">Title</Label>
          <select
            id="country"
            className="outline-1 h-10 p-2 rounded-md w-full border"
            {...register('country')}
          >
            <option value="">--Select Country--</option>
            {countries.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <span className="text-red-500">
          {errors?.country?.message}
          </span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" placeholder="Enter Your state" {...register('state')}></Input>
          <span className="text-red-500">{errors?.state?.message}</span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter Your city..." {...register('city')}></Input>
          <span className="text-red-500">{errors?.city?.message}</span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" placeholder="Enter Price" {...register('price')} ></Input>
          <span className="text-red-500">{errors?.price?.message}</span>
        </div>
        <div className="mt-5 ml-2">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" onChange={handleImageChange}></Input>
          <span className="text-red-500">{errors?.image?.message}</span>
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

        <span className="text-red-500">{errors?.description?.message}</span>
      </div>

      <div className="mt-5">
        <Label htmlFor="Label">Category</Label>
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((item) => (
            <div className="flex space-x-4">
              <input
                type="checkbox"
                id={item.name}
                value={item.name}
                checked={(HomeCategories as string[]).includes(item.name)}
                onChange={(event) => {
                  if (event.target.checked) {
                    setHomeCategories([...HomeCategories, item.name]);
                  } else {
                    const filterCategory = HomeCategories.filter(
                      (item) => item != event.target.value
                    );
                    setHomeCategories(filterCategory);
                  }
                }}
              />
              <label className="text-sm font-medium" htmlFor={item.name}>
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button className="bg-blue-500 w-full mt-5">Submit</Button>
    </form>
  );
}
