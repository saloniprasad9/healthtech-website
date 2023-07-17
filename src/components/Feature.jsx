import React from 'react'
import yourstory from '../assets/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp';
import yahoo from '../assets/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png';
import navbharat from '../assets/navbharat-removebg-preview-1.png';
import shark from '../assets/subhag-healthtech-in-shark-tank-india-season-2.webp';
import social from '../assets/Social-Alpha-Logo-1.png';
import sunday from '../assets/the-sunday-guardian-removebg-preview-1.png';
const Feature = () => {
  return (
    <div className='flex flex-col items-center mt-10 gap-10 mb-10'>
      <h1 className='top-10'>As Featured In</h1>
      <div className='flex flex-row gap-10'>
        <img src={yourstory} alt='yourstory' className='h-[80px] w-[300px]'/>
        <img src={yahoo} alt='yahoo' className='h-[80px] w-[300px]'/>
        <img src={navbharat} alt='navbharat' className='h-[80px] w-[300px]'/>
        <img src={shark} alt='shark' className='h-[80px] w-[300px]'/>
        <img src={social} alt='social' className='h-[80px] w-[300px]'/>
        <img src={sunday} alt='sunday' className='h-[80px] w-[300px]'/>
      </div>
    </div>
  )
}

export default Feature