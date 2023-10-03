import React, { useState } from 'react'
import {HiOutlineSquare3Stack3D} from 'react-icons/hi2'

export default function DropNavbar() {

    const[active,setActive]=useState(false)

  return (
    <div className='relative'>
            
            <button className={`absolute top-0 left-2 p-2 border-2 border-black text-black text-xl ${active ? 'bg-white':'bg-gray-500'}`}
            onClick={()=>setActive(!active)}
            ><HiOutlineSquare3Stack3D/>
            </button>
           
            
        <div className={`${active && 'pt-12 '}px-12 py-5 duration-1000  bg-gray-500 z-50`}>
            {
                
                active &&
                <ul className={`${!active ? "h-0 ":"h-auto"}origin-top  duration-1000 `}>
                <li className='pt-2 hover:text-white hover:border-b-2 cursor-pointer'>Home</li>
                <li className='pt-2 hover:text-white hover:border-b-2 cursor-pointer'>Contact</li>
                <li className='pt-2 hover:text-white hover:border-b-2 cursor-pointer'>About</li>
                <li className='pt-2 hover:text-white hover:border-b-2 cursor-pointer'>Services</li>
                </ul>
            }
            
        </div>
        <div className='flex-1 bg-green-300'>
                <h1>hii</h1>
        </div>
    </div>
  )
}
