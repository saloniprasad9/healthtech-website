import React from 'react'
import { services } from '../constants';
const Service = () => {
  return (
    <div className='flex flex-col items-center h-[500px]'>
        <h2 className='font-raleway font-semibold text-[#40c7b9] text-[40px]'>
            WHAT IF YOU CAN SOLVE YOUR PROBLEM?
        </h2>
        <div className='flex flex-row items-center gap-10 justify-between'>
          {services.map((service) => (
            <div key={service.id} className='flex flex-col mt-10 items-center border border-white drop-shadow'>
              <img src={service.icon} alt='icon'/>
              <h2 className='font-semibold text-[20px]'>{service.title}</h2>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Service