
import React, { useState } from 'react'
import { MdCropSquare, MdInbox } from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { IoMdMore } from "react-icons/io";

const mailType=[
  {
    icon:<MdInbox size={'20px'}/>,
    text:'Primary'
  },
  {
     icon: <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/sell_fill_baseline_p600_20dp.png" alt="Promotion" style={{ width: '20px', height: '20px' }} />,
    text: 'Promotion'
  },
  {
    icon:<FaUserFriends size={'20px'}/>,
    text:'Social'
  },

]
export default function Inbox() {
  const [mailTypeSelected,setMailTypeSelected]=useState(0)
  return (
    <div className='flex-1 bg-white rounded-xl mx-5' >
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div className='flex items-center gap-1'>
            <MdCropSquare size={'20px'} />
            <FaCaretDown size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-300  cursor-pointer'>
            <IoMdRefresh size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdMore size={'20px'} />
          </div>
        </div>

      </div>
      <div className='h-[90vh] overflow-y-auto '>
        <div className='flex items-center gap-1'>
        {
          mailType.map((item,index)=>{
              return (
                <button key={index}
                className={`flex items-center gap-5 p-4 ${mailTypeSelected === index ? 'border-b-4 border-b-blue-600 text-blue-600' : 'border-b-4 border-b-transparent'} w-52 hover:bg-gray-100`}
                onClick={()=>{
                 setMailTypeSelected(index)
                }}
                >
                  {
                   item.icon
                  }
                  <span> {item.text}</span>
                </button>
              )
          })
        }
        </div>

      </div>
    </div>
  )
}
