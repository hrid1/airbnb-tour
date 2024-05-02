"use client"

import React, { useState } from "react";
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
import { createClient } from "@/utils/supabase/client";
import { login } from './action'
import SocialBtns from "./SocialBtns";

export default function LoginModel() {

    const [open, setOpen] = useState(false);
    
  return (
    <AlertDialog open={open} >
      <AlertDialogTrigger asChild>
        <li onClick={()=>{setOpen(true)}} className="cursor-pointer p-2 rounded-md hover:bg-slate-200">
          Login
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex items-center justify-between">
              <span>Login</span>
              <span onClick={()=>setOpen(false)} className="hover: cursor-pointer bg-blue-200 p-1 h-8 w-8 text-center rounded" >X</span>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form>
              <h1 className="text-lg font-bold">Welcome To this Site</h1>
              <div className="mt-5">
                <Label  htmlFor="email">Email</Label>
                <Input name="email" className="my-2" placeholder="Enter Your email" id="email"></Input>
                <span className="text-red-400"></span>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input name="password" className="my-2" placeholder="Enter Your password" id="password"></Input>
                <span className="text-red-400"></span>
              </div>

              <div className="mt-5">
                <Button
                formAction={login} 
                className="w-full">Continue</Button>
              </div>
              <h1 className="text-center my-2 text-xl font-bold">-- OR --</h1>
              
            </form>

            <SocialBtns></SocialBtns>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
