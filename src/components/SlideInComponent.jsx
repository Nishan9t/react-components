import React, { useState } from "react";


const SlideInComponent = () => {

   const [active,setActive]=useState("<")
   const [open,setOpen]=useState(true)
  
  return (
    <div className="flex">
        
        <div className={`${open ? "w-1/4" :"w-10"} duration-500 h-screen bg-gray-800 relative md:text-center `}>
        <button className={`absolute cursor-pointer -right-0 top-0 border-2 rounded-full px-2 text-white font-bold bg-red-500 ${!open && 'rotate-180'}` }
        onClick={()=>{
          setOpen(!open)
         
        }}  
        >{active}</button>
          <span className={`${!open && 'hidden'} origin-left duration-500`}>
          <h1 className="font-bold text-xl underline text-white">Nishant Pandey</h1>
          <div className="mt-4 text-white ">
            <ul className="text-left md:mx-4 ">
              <li className="my-2 hover:text-red-500 cursor-pointer">Dashboard</li>
              <hr/>
              <li className="my-2 hover:text-red-500 cursor-pointer">Products</li>
              <hr/>
              <li className="my-2 hover:text-red-500 cursor-pointer">Contact</li>
              <hr/>
              <li className="my-2 hover:text-red-500 cursor-pointer">About</li>
              <hr/>
            </ul>
           
          </div>
          </span>
          
          
        </div> 
        <div className="flex-1 h-screen text-bold">
          Homepage
        </div>    
        
        
    </div>
  );
};

export default SlideInComponent;