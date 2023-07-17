import React from 'react'
import logo from '../assets/cropped-forajendra_23_01_19_website_logo-1.png';
const Navigation = () => {
  return (
    <div className='flex flex-row justify-between items-center h-[60px] mt-2'>
        <img src={logo} alt='logo' className='h-[40px] ml-10'/>
        <div className='flex flex-row gap-3'>
            <h4 className='font-poppins text-black'>Home</h4>
            <h4 className='font-poppins text-black'>About Us</h4>
            <h4 className='font-poppins text-black'>Products</h4>
            <h4 className='font-poppins text-black'>IUI Insights</h4>
            <h4 className='font-poppins text-black'>Certifications</h4>
            <h4 className='font-poppins text-black'>Blog</h4>
            <h4 className='font-poppins text-black'>Contact Us</h4>
        </div>
        <button className='bg-[#40c7b9] text-white border mr-10'>Order Now</button>
    </div>
  )
}

export default Navigation