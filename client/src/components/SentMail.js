
import { RxCross1 } from "react-icons/rx";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from "../firebase";
export default function SentMail() {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    
    // console.log(formData);

    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
          
    })
    dispatch(setOpen(false))
    setFormData({
      to: "",
      subject:"",
      message: "",
     
    })
  };

  const open = useSelector(store => store.appSlice.open);
  const dispatch = useDispatch();

  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className='flex px-3 py-2 bg-[#F2F6FC] justify-between rounded-t-md'>
        <div>
          New Message
        </div>
        <div
          onClick={() => {
            dispatch(setOpen(false));
          }}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross1 size={"10px"} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          type="text"
          value={formData.to}
          onChange={changeHandler}
          name="to"
          placeholder="To"
          className="outline-none py-1"
        />
        <input
          type="text"
          value={formData.subject}
          onChange={changeHandler}
          name="subject" 
          placeholder="Subject"
          className="outline-none py-1"
        />
       
        <textarea
          name="message"
          value={formData.message}
          onChange={changeHandler}
          cols="30"
          rows="10"
          className="outline-none"
        />
        <button type="submit" className="bg-[#5419e8] rounded-full w-fit px-4 text-white font-medium">
          Send
        </button>
      </form>
    </div>
  );
}
