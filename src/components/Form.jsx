import React from 'react'
import {layout} from '../style';
const Form = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
          
      </div>
      <div className={`border border-black w-[300px] h-[300px] drop-shadow ${layout.sectionInfo}`}>
        <div className='flex flex-col'>
          <h2>I want to talk to an Experts</h2>
          <div className='flex flex-col'>

          </div>
          <div className='flex flex-col'>

          </div>
          <button>Send</button>
        </div>
      </div>
    </section>
  )
}

export default Form