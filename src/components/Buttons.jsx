import React from 'react'

export default function Buttons() {
  return (
    <div>
        <div className='flex flex-col w-1/5 mx-auto mt-16 gap-5'>
            <button className='border-2 px-4 py-2 rounded-md bg-blue-500 hover:scale-x-95 duration-700'>Click</button>
            <button className='border-2 px-4 py-2 rounded-md bg-blue-500 hover:bg-slate-500 origin-center duration-1000'>Click</button>
            <button className='border-2 px-4 py-2 rounded-md bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-500'>Click</button>
            <button className='border-2 px-4 py-2 rounded-md bg-blue-500 hover:animate-bounce'>Click</button>
            <button className='border-2 px-4 py-2 rounded-md hover:bg-green-700 hover-top duration-1000'>Click</button>
            <button className='border-2 px-4 py-2 rounded-md bg-blue-500'>Click</button>
            <button className='border-2 px-4 py-2 rounded-md bg-blue-500'>Click</button>
            <button className='border-2 px-4 py-2 rounded-md bg-blue-500'>Click</button>
            <button className='border-2 px-4 py-2 rounded-md bg-blue-500'>Click</button>
        </div>
    </div>
  )
}
