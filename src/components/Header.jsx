import React from 'react'
import media from '../assets/Screenshot 2023-07-16 at 19-52-54 Best IUI Treatment Procedure for Infertility in India.png';
import content from '../assets/Screenshot 2023-07-16 at 19-55-32 Best IUI Treatment Procedure for Infertility in India.png';
const Header = () => {
  return (
    <div className='bg-[#2a2a2a] flex flex-row w-[100%] h-[70px] items-center gap-20'>
      <img src={media} alt='media' className='w-[200px] h-[40px]'/>
      <img src={content} alt='content' className='w-[500px] h-[60px]'/>
    </div>
  )
}

export default Header