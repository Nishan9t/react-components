import React, { useState } from 'react'
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


export default function Slider() {

    const slides=[
        {
            url:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        },
        {
            url:'https://plus.unsplash.com/premium_photo-1685283298967-88bdc86e9c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80'
        },
        {
            url:'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
    ];

    const [currentIndex,setCurrentIndex]=useState(0)

    const prevSlide=()=>{
        const ifFirstSlide= currentIndex===0;
        const newIndex = ifFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);

    }
    const nextSlide=()=>{
        const ifLastSlide = currentIndex===slides.length-1;
        const newIndex = ifLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);

    }

    const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex)

    }

    // setInterval(nextSlide,5000);

  return (
    //providing class of group
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'> </div>

        {/* left arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronLeft size={30} onClick={prevSlide}/>
        </div>

        {/* right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0  translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronRight size={30} onClick={nextSlide}/>
        </div>

        {/* dots */}
        <div className='flex top-4 justify-center py-2'>
        {
            slides.map((slide,slideIndex)=>(
                <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled className={`${currentIndex===slideIndex&&'text-red-500'}`}/>
                </div>
            ))
        }
        </div>

    </div>
  )
}
