

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SocialBtns() {


    const supabase = createClient();

    async function signInWithGithub() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'github',
          options: {
            redirectTo: "/",
          }
        })

        if(error) {
            // <ToastContainer />
            toast.error(error.message, {theme: "colored"})
        }
      }

    //   google 

    
    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: "/",
          }
        })

        if(error) {
            // <ToastContainer />
            toast.error(error.message, {theme: "colored"})
        }
      }
   
      

      
      
      

  return (
    <div>
      <Button onClick={signInWithGoogle} variant="outline" className="w-full mt-2">
        <Image
          src="/images/google.png"
          width={40}
          height={40}
          alt="google login"
          className="mr-5 p-1"
        ></Image>
        <p>Continue with Google</p>
      </Button>
      <Button onClick={signInWithGithub} variant="outline" className="w-full mt-2">
        <Image
          src="/images/github.png"
          width={40}
          height={40}
          alt="google login"
          className="mr-5 p-1"
        ></Image>
        <p>Continue with Github</p>
      </Button>
    </div>
  );
}
