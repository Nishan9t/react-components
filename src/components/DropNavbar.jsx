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
            
        <div className={`${active && 'pt-12 '}px-4 bg-gray-500`}>
            {
                
                active &&
                <ul className='origin-top duration-1000'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Services</li>
            </ul>
            }
            
        </div>
        <div className='flex-1 bg-green-300'>

        </div>
    </div>
  )
}
