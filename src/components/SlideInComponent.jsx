import React, { useState } from "react";


const SlideInComponent = () => {

  
  return (
    <div className="w-full">
        <div className="w-1/5 min-h-screen bg-gray-400 p-4 text-center items-center">
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
    </div>
  );
};

export default SlideInComponent;