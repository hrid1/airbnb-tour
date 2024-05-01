import React from 'react'
import BrandLogo from './BrandLogo'
import { MenuIcon, Search } from "lucide-react"
import NavMenu from './NavMenu'
import MobileNav from './MobileNav'
import { createClient } from '@/utils/supabase/server'

export default async function Navbar() {

  const supabase = createClient();

  const {data, error} = await supabase.auth.getSession();
 console.log(data)

  return (
    <div className='flex items-center justify-between px-4 border-b-2 my-2'>
      <div className='hidden md:block'>
        <BrandLogo></BrandLogo>
      </div>
      <div className='hidden md:flex items-center space-x-2 border rounded-3xl p-4'>
       <span>Any Time</span>
       <span>|</span>
       <span>Any Where</span>
       <span>|</span>
       <span className=' text-gray-500'>Add Guest</span>
       <span className='bg-blue-500 rounded-full p-2'>
            <Search height={17} width={17} ></Search>
        </span>
      </div>
      <div className='block w-full md:hidden'>
        <MobileNav></MobileNav>
      </div>
      <div className='hidden md:flex items-center space-x-4'>
        {/* thrid com */}
        <span>Add Your Home</span>
        
        <NavMenu session={data?.session?.user}></NavMenu>
        
       
      </div>
    </div>
  )
}
