import React from 'react'
import { useRef, useEffect, useState } from "react";
import { FaAngleDown } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { FaSearch } from "react-icons/fa";

const SVG = <svg
width={20}
height={20}
viewBox="0 0 20 20"
fill="none"
role="img"
aria-hidden="true"
strokecolor="rgba(2, 6, 12, 0.92)"
fillcolor="rgba(2, 6, 12, 0.92)"
>
<circle
  cx={10}
  cy={10}
  r={9}
  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
/>
<path
  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
  fill="white"
/>
<defs>
  <linearGradient
    id="StoreRating20_svg__paint0_linear_32982_71567"
    x1={10}
    y1={1}
    x2={10}
    y2={19}
    gradientUnits="userSpaceOnUse"
  >
    <stop stopColor="#21973B" />
    <stop offset={1} stopColor="#128540" />
  </linearGradient>
</defs>
</svg>


const product = [
  {
    imgs:'./imgs/pizza.png',
    titel:'50% OFF UPTO ₹100',
    name:'Pizza Hut',
    ratting:'4.2',
    time:'30-35 mins',
    offer:'Pizaas'
  },
  {
    imgs:'./imgs/free.png',
    titel:'ITEMS AT ₹89',
    name:"Dominos' Pizza",
    ratting:'4.4',
    time:'20-25 mins',
    offer:'Pizaas,Italian,Pastas,Desserts'
  },
  {
    imgs:'./imgs/burger.png',
    titel:'ITEMS AT ₹99',
    name:'Burger King',
    ratting:'4.4',
    time:'25-30 mins',
    offer:'burgers,American,katargam'
  },
  {
    imgs:'./imgs/mcdonald.png',
    titel:'',
    name:"MacDonald's",
    ratting:'4.4',
    time:'20-25 mins',
    offer:'Burgers,Beverages,Cafe,desserts'
  },
  {
    imgs:'./imgs/kfc.png',
    titel:'',
    name:'KFC',
    ratting:'4.2',
    time:'30-35 mins',
    offer:'Burgers,Fast Food,Rolls & Wraps'
  },
  {
    imgs:'./imgs/mahalaxmi.png',
    titel:'10% OFF ABOVR ₹699',
    name:'Mahalaxmi juice And Fast...',
    ratting:'4.7',
    time:'25-30 mins',
    offer:'Ice Cream,Burgers,Pizzas,Salads..'
  },
  {
    imgs:'./imgs/lapino.png',
    titel:'50% OFF UPTO ₹100',
    name:"la Pino's Pizza",
    ratting:'4.4',
    time:'15-20 mins',
    offer:'Pizaas,Pastas,Italian,Desserts,..'
  },
  {
    imgs:'./imgs/maruti.png',
    titel:'60% OFF UPTO ₹120',
    name:'Hotel Maruti',
    ratting:'4.4',
    time:'20-25 mins',
    offer:'Thalis,Punjabi,Rajasthani,Gujrati..'
  },
  {
    imgs:'./imgs/p.hotel.png',
    titel:'',
    name:'P.Hotel Bhagat tarachand',
    ratting:'4.5',
    time:'20-25 mins',
    offer:'Chinese,Biryani'
  },
  {
    imgs:'./imgs/delhi.png',
    titel:'60% OFF UPTO ₹120',
    name:'delhi Dasrarkhwan Restau..',
    ratting:'4.1',
    time:'20-25 mins',
    offer:'Biryani,Mughlai,Tandoor,Seafood..'
  },
  {
    imgs:'./imgs/pavbhaji.png',
    titel:'₹175 OFF ABOVE ₹399',
    name:'Mahesh Pavbhaji - pal',
    ratting:'4.3',
    time:'30-35 mins',
    offer:'North Indian,South Indian..'
  },
  {
    imgs:'./imgs/dessert.png',
    titel:'₹100 OFF Above ₹249',
    name:'Desserts & More',
    ratting:'4.4',
    time:'10-15 mins',
    offer:'Desserts,Bakery,Burgers,Cafe,..'
  },
  {
    imgs:'./imgs/havmore.png',
    titel:'',
    name:'Havmor ice cream',
    ratting:'4.6',
    time:'30-35 mins',
    offer:'American,Beverages,Desserts'
  },
  {
    imgs:'./imgs/house.png',
    titel:'',
    name:'Poha House',
    ratting:'4.1',
    time:'35-40 mins',
    offer:'Pastas'
  },
  {
    imgs:'./imgs/99.png',
    titel:'20% OFF UPTO ₹50',
    name:'99 Pancakes',
    ratting:'4.6',
    time:'25-30 mins',
    offer:'Bakery'
  },
  {
    imgs:'./imgs/star.png',
    titel:'40% OFF UPTO ₹80',
    name:'Starbuckes Coffee',
    ratting:'4.4',
    time:'30-35 mins',
    offer:'beverages,Cafe,Snacks,Desserts..'
  }
]

const data = [
  {
    name:'Filter',
    icon:<TbAdjustmentsHorizontal />
  },
  {
    name:'Sort By',
    icon:<FaAngleDown />
  },
  {
    name:'Fast Delivery'
  },
  {
    name:'New on Swiggy'
  },
  {
    name:'Rating 4.0+'
  },
  {
    name:'Pure Veg'
  },
  {
    name:'Offers'
  },
  {
    name:'Fast Delivery'
  },
  {
    name:'Rs.300-Rs.600'
  },
  {
    name:'Less Than Rs.300'
  }
]

export const Last = () => {

  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const { top } = componentRef.current.getBoundingClientRect();
        setIsAtTop(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className='mt-8 2xl:max-w-[1400px] mx-auto px-12 xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[8500px] sm:max-w-[700px]'  ref={componentRef}>
        <div className='flex my-6 item-center justify-between'>
          <h1 className='text-[1.7rem] font-bold tracking-tighter'>Restaurants with online food delivery in Surat</h1>
        </div>
        <div className={isAtTop ? "items-center fixed top-4 left-0 z-[99999] pl-40 bg-white flex  gap-4" : "flex gap-4"}>
        {
          data.map((icons, index) => {
            return<div className='bg-white' key={index}>
              <div className='w-full h-full flex items-center gap-2 border-slate-300 border max-w-max p-1 rounded-3xl px-3 font-medium cursor-pointer'>{icons.name}{icons.icon}</div>
            </div>
            }
          )
        }
        {isAtTop && (
              <div>
                <input type="text" placeholder="Search For Restaurant and food"  className='ml-8 w-[20rem] py-2 px-4 bg-slate-200 border-none rounded-lg outline-none font-bold'/>
              </div> 
              )}
        </div>

        <div className='flex flex-wrap gap-6 overflow-hidden mt-10'>
        {
          product.map((item, index) => (
            <div className='w-[308px] shrink-0 cursor-pointer transition-transform duration-500 ease-in-out transform' key={index}>
              <div className='duration-100 hover:scale-95'>
              <div className='h-[200px] overflow-hidden rounded-[15px] relative'>
                <img src={item.imgs} className='w-full h-full object-cover' alt={item.titel} />
                <div className='imgs-overlay absolute inset-0 flex items-end justify-start p-2 font-bold text-[25px] tracking-tighter bg-opacity-50 text-white'>
                  {item.titel}
                </div>
              </div>
              <div className='mt-1 ml-3'>
                <div className='font-bold text-xl'>
                  {item.name}
                </div>
                <div className='flex text-[19px] font-medium mt-[-3px] items-center'>
                  {SVG}{item.ratting} • {item.time}
                </div>
                <div className='text-[#02060c99] font-semibold text-[1.1rem]'>
                  {item.offer}
                </div>
              </div>
              </div>
            </div>
    ))
  }
</div>
    <hr className='mt-8 border border-slate-200'/>
      </div>
    </>
  )
}

export default Last