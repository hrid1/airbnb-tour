"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { RegisterType, registerSchema } from "@/validations/authSchema";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";



export default function SignUpModel() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = createClient();
  const router = useRouter();
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = async (payload: RegisterType) => {
    setLoading(true);
    // console.log(data);
    const {data, error} = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
      options: {
        data: {
          name: payload.name,
        },
      },
    });
    setLoading(false);
    if(error){
      toast.error(error.message, {theme: "colored"})
    }else if(data.user) {
      await supabase.auth.signInWithPassword({
        email: payload.email,
        password: payload.password
      });
      
      toast.success("Login successfully", {theme: "colored"});
      router.refresh();
      setOpen(false);
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li
          onClick={() => {
            setOpen(true);
          }} 
          className="cursor-pointer p-2 rounded-md hover:bg-slate-200"
        >
          Sign Up
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex items-center justify-between">
              <span>Register Your Account</span>
              <span
                onClick={() => setOpen(false)}
                className="hover: cursor-pointer bg-blue-200 p-1 h-8 w-8 text-center rounded"
              >
                X
              </span>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <ToastContainer />
              <h1 className="text-lg font-bold">Welcome To this Site</h1>
              <div className="my-2">
                <Label htmlFor="name">User Name</Label>
                <Input
                  className="my-2"
                  placeholder="Enter Your name"
                  id="name"
                  {...register("name")}
                ></Input>
                <span className="text-red-400">{errors.name?.message}</span>
              </div>
              <div className="my-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="my-2"
                  placeholder="Enter Your email"
                  id="email"
                  {...register("email")}
                ></Input>
                <span className="text-red-400">{errors.email?.message}</span>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  className="my-2"
                  placeholder="Enter Your password"
                  id="password"
                  {...register("password")}
                ></Input>
                <span className="text-red-400">{errors.password?.message}</span>
              </div>
              <div>
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  className="my-2"
                  placeholder="Cofirm Your password"
                  id="cpassword"
                  {...register("password_confirmation")}
                ></Input>
                <span className="text-red-400">
                  {errors.password_confirmation?.message}
                </span>
              </div>

              <div className="mt-5">
                <Button className="w-full" disabled={loading}>{loading ? "Prossing" : "Sign Up"}</Button>
              </div>
              <h1 className="text-center my-2 text-xl font-bold">-- OR --</h1>
              <Button variant="outline" className="w-full mt-2">
                <Image
                  src="/images/google.png"
                  width={30}
                  height={30}
                  alt="google signup"
                  className="mr-5 p-1"
                ></Image>
                <p>Sign up with Google</p>
              </Button>
              <Button variant="outline" className="w-full mt-2">
                <Image
                  src="/images/github.png"
                  width={30}
                  height={30}
                  alt="google signup"
                  className="mr-5 p-1"
                ></Image>
                <p>Sign up with Github</p>
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Sign up</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
