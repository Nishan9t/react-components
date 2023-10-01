import React, { useState } from "react";


const SlideInComponent = () => {

    
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleVisibility}
      >
        Toggle Slide In
      </button>

      {isVisible && (
        <div className="fixed inset-0 flex left-0 z-50 ">
          <div className=" relative left-0 bg-white p-8 rounded shadow-lg transform translate-x-full transition-transform duration-700">
            <h2 className="text-2xl font-bold mb-4">Slide In Content</h2>
            <p>This content slides in from the right.</p>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleVisibility}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideInComponent;