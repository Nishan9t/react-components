import React from 'react'
import { useState } from 'react'

export default function Toggle() {

    const [click,setClick]=useState(false);

  return (
    <div className='flex justify-center items-center'>
        <div className={`w-screen h-screen items-center ${click?'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'}`}>
            <button onClick={()=>setClick(!click)} className={`flex text-center items-center border border-2 bg-white rounded-full  w-[160px] h-[100px] ${click?'justify-end':'justify-start'}   duration-300`}>
                <div className={` rounded-full bg-gray-700 w-[80px] h-[80px] ${click?'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%':'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'} `} >

                </div>
            </button>
        </div>
    </div>
  )
}
