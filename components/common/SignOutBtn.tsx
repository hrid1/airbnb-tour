"use client"

import React from "react";
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
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function SignOutBtn() {

    const supabase = createClient();
    const router = useRouter()

    async function signOut() {
  const { error } = await supabase.auth.signOut()
  router.refresh()
//   if(error)

 
}
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <li className=" cursor-pointer p-2 rounded-md hover:bg-slate-200">
          LogOut
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will logOut you from current window.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={signOut}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
