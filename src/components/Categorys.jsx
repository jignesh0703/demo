import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const categoryimgs = [
  {
    imgs:'./imgs/sweets.png'
  },
  {
    imgs:'./imgs/DiwaliGifting.png'
  },
  {
    imgs:'./imgs/Idli.png'
  },
  {
    imgs:'./imgs/dhokla.png'
  },
  {
    imgs:'./imgs/Paratha.png'
  },
  {
    imgs:'./imgs/Poha.png'
  },
  {
    imgs:'./imgs/chole bhature.png'
  },
  {
    imgs:'./imgs/Dosa.png'
  },
  {
    imgs:'./imgs/samosa.png'
  },
  {
    imgs:'./imgs/Kachori.png'
  },
  {
    imgs:'./imgs/Biryani.png'
  },
  {
    imgs:'./imgs/thepla.png'
  },
  {
    imgs:'./imgs/Pav Bhaji.png'
  },
  {
    imgs:'./imgs/pakoda.png'
  },
  {
    imgs:'./imgs/Vada.png'
  },
  {
    imgs:'./imgs/Poori.png'
  },
  {
    imgs:'./imgs/cake.png'
  },
  {
    imgs:'./imgs/Shake.png'
  },
  {
    imgs:'./imgs/Khichdi.png'
  },
  {
    imgs:'./imgs/Salad.png'
  }
]

const categorys = () => {

  const [slide,setslide] = useState(0);

  const nextslide =() =>{
    if (slide + 8 >= categoryimgs.length) return;
    setslide(slide + 3.1);
  }

  const pervslide = () =>{
    if (slide - 2 < 0) return;
    setslide(slide - 3.1);
  }

  return (
    <>
    <div className='2xl:max-w-[1400px] mx-auto px-12 xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[8500px] sm:max-w-[700px]'>
      <div className='flex my-6 item-center justify-between'>
        <h1 className='text-[1.7rem] font-bold tracking-tighter'>What's on your mind?</h1>
        <div className='flex gap-2'>
          <h4 className='w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer' onClick={pervslide}><FaArrowLeft /></h4>
          <h4 className='w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer' onClick={nextslide}><FaArrowRight /></h4>
        </div>
      </div>
      <div className='flex overflow-hidden gap-2'>
      {
        categoryimgs.map(
          (categoryimgs,index)=>{
            return<div style={{
              transform: `translateX(-${slide * 100}%)`
            }} key={index} className='w-[150px] shrink-0 duration-500 cursor-pointer'>
              <img src={categoryimgs.imgs}/>
            </div>
          }
        )
      }
      </div>
        <hr className='mt-8 border border-slate-200'/>
      </div>
    </>
  )
}

export default categorys