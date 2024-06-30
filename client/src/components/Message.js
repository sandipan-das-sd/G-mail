import { RiStarSLine } from "react-icons/ri";

import React from 'react'
import { MdCropSquare } from 'react-icons/md'

export default function Message() {
  return (
    <div className='flex items-start  justify-between border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
      <div className='flex items-center gap-3' >

        <div className='flex text-gray-300'>
          <MdCropSquare className='w-5 h-5' />
        </div>

        <div className='flex text-gray-300'>
          <RiStarSLine className='w-6 h-6' />
        </div>
      </div>
      <div className=" flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">Lorem dsjfjafjsdfijfif jfsjsfjfjfn jjkkjgguuhu hhjfffffyyy ftdrrrdttt iuugddrddd</p>

      </div>

      <div className=" flex-none text-gray-400 text-sm">
        Time
      </div>
    </div>
  )
}
