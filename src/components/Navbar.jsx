import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const links = [
  {
    icon:<FaSearch />,
    name:"Search"
  },
  {
    icon:<BiSolidOffer />,
    name: "offers"
  },
  {
    icon:<FiHelpCircle />,
    name:"Help"
  },
  {
    icon:<IoPersonOutline />,
    name:"Sign In"
  },
  {
    icon:<CiShoppingCart />,
    name:"cart"
  },
]


const Navbar = () => {

  const [toggle,settoggle] = useState(false);

  const showlocation = () => {
    settoggle(true)
  }

  const hidelocation = () =>{
    settoggle(false)
  }
  return (
    <>
    <div className='bgblack-overlay h-full w-full  duration-500 z-[9999999999]' style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? 'visible' : 'hidden'
    }} onClick={hidelocation}>
      <div onClick={(e)=>{
        e.stopPropagation();
      }} className='bg-white w-[40rem] h-full absolute duration-[400ms] z-[99999999999]' 
      style={{
        left : toggle ? '0%' : '-100%'
      }}>
      </div>
    </div>
    <header className='p-3 shadow-xl py-4 sticky top-0 z-[9999] bg-white'>
      <div className='max-w-[1400px] mx-auto flex justify-around items-center '>
        <div className='flex'>
          <img src="./imgs/logo.png" alt="" className='w-[4rem] h-auto object-cover'/>
          <h1 className='flex cursor-pointer items-center text-[1rem] text-gray-500 font-medium group' onClick={showlocation}><h2 className='border-b-2 border-b-black text-black mx-2 font-bold group-hover:text-orange-500 group-hover:border-b-orange-500'>Varachha</h2>matavadi varachha, surat <SlArrowDown className='text-orange-500 font-bold mx-2 ' /></h1>
        </div>
      <div className='h-full ms-10 flex gap-8'> 
          {
            links.map(
              (links,index) =>{
                return<div className='flex items-center hover:text-orange-500 cursor-pointer'>
                    {links.icon}
                    <h1 className='ms-3 font-medium'>{links.name}</h1>
                  </div>
              }
            )
          }
          </div>
      </div>
    </header>
    </>
  )
}

export default Navbar