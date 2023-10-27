import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../MyProvider'

export default function Cards() {

  const {number,setNumber} = useContext(MyContext)

  const handleAdd=()=>{
    const temp = number;
    setNumber(1+temp)
    console.log(number)
  }

  const handleSub=()=>{
    if(number >0)
    {
      const temp = number;
      setNumber(temp-1)
    }
   
    console.log(number)
    
  }
  return (
    <div>
      <div className='w-1/3 bg-red-200 m-2 py-2 px-4 text-center items-center rounded-md '>
                <h1 className='text-2xl font-bold '>Product Name</h1>
                <img className='' src='https://picsum.photos/id/30/450/200' alt='product'/>
                <button className='border-2 border-black rounded-md p-2 mt-2 mx-2 hover:scale-75'
                onClick={handleAdd}
                >+</button>
                <button className='border-2 border-black rounded-md p-2 mt-2 hover:scale-75'
                onClick={
                 handleSub
                }>-</button>
        </div>
    </div>
  )
}
