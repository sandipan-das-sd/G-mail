import { RiStarSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { useDispatch } from "react-redux";
import { setSelectedEmail } from "../redux/appSlice";
export default function Message({email}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setSelectedEmail(email));
  const openMail=()=>{
   
    navigate(`/mail/${email.id}`)
  }
  return (
    <div onClick={openMail} className='flex items-start  justify-between border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
      <div className='flex items-center gap-3' >

        <div className='flex text-gray-300'>
          <MdCropSquare className='w-5 h-5' />
        </div>

        <div className='flex text-gray-300'>
          <RiStarSLine className='w-6 h-6' />
        </div>
      </div>
      <div className=" flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full"> {email?.message}</p>

      </div>

      <div className=" flex-none text-gray-400 text-sm">
        <p> { new Date(email?.createdAt?.seconds*1000).toUTCString()}</p>
      </div>
    </div>
  )
}
