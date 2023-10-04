import React from 'react'
import { motion } from 'framer-motion'

export default function Framermotion() {
  return (
    <motion.div className='my-auto items-center'
    animate={{
        marginTop:16,
        opacity:0.8,
        rotateZ: -20
    }}>
    <motion.h1 className='text-center text-2xl '
     animate={
        {
            fontSize:200,
            color:'#ff2994',
            x:100,
            y:100
        }
    }>
        Welcome to Pizza Joint
    </motion.h1>
    <motion.button className=' border-2  p-2 ml-16'
    animate={{
        scale:1.5,
        color:'#ff2342'
    }} >
        Create Your Pizza
    </motion.button>

    </motion.div>
  )
}
