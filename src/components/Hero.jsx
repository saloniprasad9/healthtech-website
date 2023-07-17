import React from 'react'
import { people } from '../constants'
const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[600px] items-center" style={{backgroundImage: "url('https://subhag.in/wp-content/uploads/2023/06/filip-mroz-767365-unsplash-scaled-1.jpg')"}}>
      <div className="absolute inset-0 bg-[#174743] opacity-30"></div>
      <h2 className="text-[#ffffff] text-[60px] relative font-bold ml-40 items-center">Improve Chance of <br className='ml-40'/> conception with IUI at <br/> home</h2>
      <div className='flex flex-row items-center'>
        {people.map((single) => (
          <div key={single.id} className='items-center'>
            <div className='mr-20'>
              <button className='bg-red'>{single.title}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero