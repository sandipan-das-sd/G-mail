// import React from 'react'
// import { LuPencilLine } from "react-icons/lu";
// import { IoMdStarOutline } from "react-icons/io";
// import { MdOutlineWatchLater } from "react-icons/md";
// import { IoSend } from "react-icons/io5";
// import { MdOutlineDrafts } from "react-icons/md";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { useDispatch } from 'react-redux';
// import { setOpen } from '../redux/appSlice';
// const sidebarItems = [
//     {
//         icon: <IoMdStarOutline size={'24px'} />,
//         text: "Sttarted"

//     },
//     {
//         icon: <MdOutlineWatchLater size={'24px'} />,
//         text: "Snoozed"

//     },
//     {
//         icon: <IoSend size={'24px'} />,
//         text: "Sent"

//     },
//     {
//         icon: <MdOutlineDrafts size={'24px'} />,
//         text: "Drafts"

//     },
//     {
//         icon: < MdOutlineKeyboardArrowDown size={'24px'} />,
//         text: "More"

//     }
// ]
// export default function Sidebar() {
//     // const [open,setOpen]=useState(false)
//     const dispatch=useDispatch()
  
//     return (
//         <div className='w-[15%]'>
//             <div className='p-3'>
//                 <button onClick={()=>{
//                     dispatch(setOpen(true)) 
//                 }} className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]'>
//                     <LuPencilLine size={'24px'} />
//                     Compose
//                 </button>
//             </div>
//             <div className='text-gray-500'>
//                 {
//                     sidebarItems.map((item, index) => {
//                         return (
//                             <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 '>
//                                 {item.icon}
//                                 <p className=''> {item.text}</p>
//                             </div>
//                         )
//                     })
//                 }


//             </div>
//         </div>
//     )
// }
import React from 'react';
import { LuPencilLine } from "react-icons/lu";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { MdOutlineDrafts } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const sidebarItems = [
    {
        icon: <IoMdStarOutline size={'24px'} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={'24px'} />,
        text: "Snoozed"
    },
    {
        icon: <IoSend size={'24px'} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={'24px'} />,
        text: "Drafts"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'24px'} />,
        text: "More"
    }
];

export default function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button
                    onClick={() => {
                        dispatch(setOpen(true));
                    }}
                    className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]'
                >
                    <LuPencilLine size={'24px'} />
                    Compose
                </button>
            </div>
            <div className='text-gray-500'>
                {sidebarItems.map((item, index) => (
                    <div key={index} className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200'>
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
