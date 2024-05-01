import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import LoginModel from "../auth/LoginModel";
import SignUpModel from "../auth/SignUpModel";
import SignOutBtn from "../common/SignOutBtn";

export default function NavMenu({ session }: { session: object | undefined }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenuIcon className="hover: cursor-pointer"></MenuIcon>
      </PopoverTrigger>
      <PopoverContent className="mr-5">
        <ul>
          {session != null ? (
            <>
              <li className=" cursor-pointer p-2 rounded-md hover:bg-slate-200">
                Dashbord
              </li>
              <SignOutBtn></SignOutBtn>
            </>
          ) : (
            <>
              <LoginModel></LoginModel>
              <SignUpModel></SignUpModel>
            </>
          )}

          {/* <li
            className=" cursor-pointer p-2 rounded-md hover:bg-slate-200">Sign Up</li> */}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
