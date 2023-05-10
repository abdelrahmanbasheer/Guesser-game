import Link from 'next/link'
import React from 'react'

const Hero = () => {
   return(
   <div className='h-screen bg-no-repeat bg-homemobile md:bg-homebig bg-cover mt-5 relative'>
    <p className='text-xl top-[30%] md:text-3xl p-3 absolute text-white font-bold'>Challenge your football knowledge with <span>Clues:</span></p>
    <Link href={"/singleplayer"}><button className='text-xl top-[39%] m-5 p-2 bg-black rounded absolute text-white font-bold'>Single Player</button></Link>
    <Link href={"/mentor"}>
    <button className='text-xl top-[39%] w-[100px] right-8 md:right-[50%] lg:right-[70%] m-5 p-2 bg-black rounded absolute text-white font-bold'>حَكم</button>
    </Link>
   </div>
  )
}

export default Hero