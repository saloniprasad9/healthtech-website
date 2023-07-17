import React from 'react'
import checkout from '../assets/Screenshot 2023-07-15 at 19-54-15 Best IUI Treatment Procedure for Infertility in India.png';
import { infos , recommendations , connects } from '../constants';


const Footer = () => {
  return (
    <div className='flex flex-col bg-[#272727] items-center'>
        <div className='flex flex-row justify-between gap-20'>
            <div className='flex flex-col gap-7'>
              <h4 className='text-white'>More Information</h4> 
              {infos.map((info) => (
                <div key={info.id} className='flex flex-col'>
                  <ul className='list-none'>
                    <li className='text-white'>
                      {info.content}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-7'>
              <h4 className='text-white'>Recommended</h4> 
              {recommendations.map((recommendation) => (
                <div key={recommendation.id} className='flex flex-col'>
                  <ul className='list-none'>
                    <li className='text-white'>
                      {recommendation.content}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-7'>
              <h4 className='text-white'>Connect</h4> 
              {connects.map((connect) => (
                <div key={connect.id} className='flex flex-col'>
                  <ul className='list-none'>
                    <li className='text-white'>
                      {connect.content}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
        </div>
        <div className='items-center mt-4'>
          <img src={checkout} alt='checkout'/>
        </div>
        <div className='items-center'>
          <p className='text-white font-normal'>
          By using this website I agree to be contacted by Subhag HealthTech over phone and email. I do not have any objection to receiving emails, messages (SMS or any <br/> other mode) and calls from Subhag HealthTech. This consent shall supersede any preferences set through Do Not Disturb (DND Register)/ National Customer <br/> Preference Register (NCPR).
          </p>
        </div>
    </div>
  )
}

export default Footer