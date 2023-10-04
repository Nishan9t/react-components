import React from 'react'
import { motion } from 'framer-motion'

export default function Framermotion() {
  return (
    <div className='w-screen h-screen'>
    <motion.h1 className='text-center text-2xl ' animate={
        {
            fontSize:200,
            color:'#ff2994',
            x:100,
            y:100
        }
    }>
        Welcome to Pizza Joint
    </motion.h1>
    <button>
        Create Your Pizza
    </button>

    </div>
  )
}
