import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Cart() {
  return (
    <div className='w-full h-[60px] bg-green-400 flex justify-between py-4 px-8'>
    <div className='text-white font-bold text-2xl'>Shopping Cart</div>
    <div className='relative w-8 text-center'>
      <AiOutlineShoppingCart className='text-2xl text-white'/>
      <span className='absolute text-white rounded-full bg-blue-600 -top-3 left-3 px-2'>5</span>
    </div>
    </div>
  )
}
