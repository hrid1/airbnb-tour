import React from 'react'
import BrandLogo from './BrandLogo'
import { MenuIcon, Search } from "lucide-react"
import NavMenu from './NavMenu'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between px-10 border-b-2 my-2'>
      <div>
        <BrandLogo></BrandLogo>
      </div>
      <div className='flex items-center space-x-2 border rounded-3xl p-4'>
       <span>Any Time</span>
       <span>|</span>
       <span>Any Where</span>
       <span>|</span>
       <span className=' text-gray-500'>Add Guest</span>
       <span className='bg-blue-500 rounded-full p-2'>
            <Search></Search>
        </span>
      </div>
      <div className='flex items-center space-x-4'>
        {/* thrid com */}
        <span>Add Your Home</span>
        
        <NavMenu></NavMenu>
        
       
      </div>
    </div>
  )
}
