import React, { useState } from "react";


const SlideInComponent = () => {

  const [active,setActive]=useState(false)
  
  return (
    <div className="flex">
        
        <div className={`w-72 h-screen bg-gray-800 relative `}>
        <button className=" absolute cursor-pointer -right-2 top-9 border-2 rounded-xl px-2 text-white font-bold bg-red-500">{`>`}</button>
          
          <h1 className="font-bold text-xl underline text-white">Nishant Pandey</h1>
          <div className="mt-4 text-white ">
            <ul className="text-left ">
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
          
          
        </div> 
        <div className="flex-1 h-screen text-bold">
          Homepage
        </div>    
        
        
    </div>
  );
};

export default SlideInComponent;