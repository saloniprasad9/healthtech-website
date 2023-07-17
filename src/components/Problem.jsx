import React from 'react'
import { problems } from '../constants'
const Problem = () => {
  return (
    <div className="relative bg-cover bg-center h-[600px]" style={{backgroundImage: "url('https://subhag.in/wp-content/uploads/2023/06/filip-mroz-767365-unsplash-scaled-1.jpg')"}}>
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className='flex flex-col ml-20'>
        <h2 className="text-[#40C7B9] text-[50px] relative z-10">I BET YOU ARE LIKE ME</h2>
        {problems.map((problem) => (
          <div key={problem.id} className='relative z-10 flex flex-row'>
            <img src={problem.icon} alt='icon'/>
            <p className=''>{problem.content}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Problem