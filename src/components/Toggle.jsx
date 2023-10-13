import React from 'react'

export default function Toggle() {
  return (
    <div className='p-4'>
        <div className=' w-screen h-screen bg-green-200 items-center '>
            <button className='border border-2 bg-white rounded-full p-1 w-96 h-32 relative'>
                <div className='absolute rounded-full bg-gray-700 w-1/2 h-full top-0 right-0 '>

                </div>
            </button>
        </div>
    </div>
  )
}
