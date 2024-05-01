import MobileNav from "@/components/base/MobileNav";
import Navbar from "@/components/base/Navbar";
import Categories from "@/components/common/Categories";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import Image from "next/image";

export default async function Home() {
  const supabase = createClient();
  const {data, error} = await supabase.auth.getUser();
  console.log("here: ", data)

  
 
  return (
   <div>
      <Navbar></Navbar>
      {/* <MobileNav></MobileNav> */}
      <Categories></Categories>
   </div>
  );
}
