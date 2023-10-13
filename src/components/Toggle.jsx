import React from 'react'
import { useState } from 'react'

export default function Toggle() {

    const [click,setClick]=useState(false);

  return (
    <div className='p-4'>
        <div className=' w-screen h-screen bg-green-200 items-center '>
            <button onClick={()=>setClick(!click)} className={`flex text-center items-center border border-2 bg-white rounded-full  w-[160px] h-[100px] ${click?'justify-end':'justify-start'}   duration-300`}>
                <div className={` rounded-full bg-gray-700 w-[80px] h-[80px]  `} >

                </div>
            </button>
        </div>
    </div>
  )
}
