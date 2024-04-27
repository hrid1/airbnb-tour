import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import LoginModel from "../auth/LoginModel";
import SignUpModel from "../auth/SignUpModel";

export default function NavMenu() {
  return (
    
      <Popover>
        <PopoverTrigger asChild><MenuIcon className="hover: cursor-pointer"></MenuIcon></PopoverTrigger>
        <PopoverContent className="mr-5" >
           <ul>
            <LoginModel></LoginModel>
            {/* <li
            className=" cursor-pointer p-2 rounded-md hover:bg-slate-200">Sign Up</li> */}
             <SignUpModel></SignUpModel>
           </ul>
        </PopoverContent>
      </Popover>
    
  );
}
