import React from 'react'
import { services } from '../constants'
const Service = () => {
  return (
    <div className='flex flex-col items-center h-[100px]'>
        <h2 className='font-raleway font-semibold text-[#40c7b9] text-[40px]'>
            WHAT IF YOU CAN SOLVE YOUR PROBLEM?
        </h2>
        <div className='flex flex-row'>
          {services.map((service) => (
            <div key={service.id} className='flex flex-col mt-10'>
              <img src={service.icon}/>
              <h2>{service.title}</h2>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Service