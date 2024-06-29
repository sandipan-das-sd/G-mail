import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { VscGear } from "react-icons/vsc";
import { PiDotsNineBold } from "react-icons/pi";
export default function navbar() {
  return (
    <div className=' flex items-center justify-between mx-3 h-16'>
      <div className='flex item-center gap-10'>
    <div className='flex item-center gap-2'>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
        <GiHamburgerMenu size={"20px"}/>

        </div>
      <img className='w-10' src='https://i.pinimg.com/originals/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.png' alt='Gmail Logo'/>
        <h1 className='text-2xl text-gray-500 font-medium mt-1'> Gmail</h1>
    </div>
      </div>
      <div className='md:block hidden w-[50%] mr-60'>
        <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
        <IoSearch size={"24px"} className='text-gray-700' />
        <input
        type='text'
        className='rounded-full w-full bg-transparent outline-none px-1 '
        placeholder='Search Mail'
        />
        </div>

      </div>
      <div className='md:block hidden '>
    <div className='flex items-center gap-2 '>
    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
    <FaRegCircleQuestion
    size={20} />
    </div>

    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
    <VscGear
    size={20} />
    </div>

    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
    <PiDotsNineBold 
   
    size={25} />
    </div>
    </div>


    
    
      </div>
    </div>
  )
}
