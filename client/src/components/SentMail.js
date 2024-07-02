import { RxCross1 } from "react-icons/rx"; 
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";

export default function SentMail() {
    const open=useSelector(store=>store.appSlice.open)
    const dispatch=useDispatch()
  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>

      <div className='flex px-3 py-2 bg-[#F2F6FC] justify-between rounded-t-md'>
            <div>
                New Message
            </div>
            <div onClick={()=>{
                    dispatch(setOpen(false))
            }} className="p-2 rounded-full hover: bg-gray-200 cursor-pointer">
               <RxCross1 size={"10px"}/> 
            </div>
      </div>
      <form action="" className="flex flex-col p-3 gap-2">
        <input
        type="text"
        placeholder="To"
        className="outtline-none py-1"
        />
        <input
        type="text"
        placeholder="Subject"
        className="outtline-none py-1"
        />
        <input
        type="text"
        placeholder="Message"
        className="outtline-none py-1"
        />
        <textarea
        name="message" 
        cols={'30'}
        rows={'10'}
        className="outline-none"
        />
        <button type="submit" className=" bg-[#5419e8] rounded-full w-fit px-4 text-white font-medium"> Send</button>
      </form>
    </div>
  )
}
