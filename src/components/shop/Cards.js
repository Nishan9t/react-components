import React from 'react'

export default function Cards() {
  return (
    <div>
      <div className='w-1/3 bg-red-200 m-2 py-2 px-4 text-center items-center rounded-md '>
                <h1 className='text-2xl font-bold '>Product Name</h1>
                <img className='' src='https://picsum.photos/id/30/450/200' alt='product'/>
                <button className='border-2 border-black rounded-md p-2 mt-2 hover:scale-75'>+</button>
        </div>
    </div>
  )
}
