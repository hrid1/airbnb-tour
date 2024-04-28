import React from 'react'
import Image from 'next/image'
export default function BrandLogo() {
  return (
    <div>

        <Image src="/images/logo.png" width={120} height={120} alt='logo' className=' hidden lg:block' ></Image>

        <Image src="/images/logo-sm.png" width={80} height={80} alt='logo' className='lg:hidden'></Image>
      
    </div>
  )
}
