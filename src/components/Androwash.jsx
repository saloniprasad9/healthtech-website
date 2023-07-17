import React from 'react'
import androwash from '../assets/p2-e15887524306041.png';
import styles , { layout} from '../style';
const Androwash = () => {
  return (
    <section className={`bg-[#defffc] ${layout.section}`}>
      <div className={`${layout.sectionInfo} items-center`}>
          <h2 className={`${styles.heading2}`}>Further Increase Chances By</h2>
          <div className='bg-[#40c7b9] border border-white w-[300px] h-[100px]'>
            <h1 className='text-white '>ANDROWASH</h1>
          </div>
          <h2  className={`${styles.heading2}`}>Economical, Smart & Automated</h2>
          <button className='bg-red'>Book Sperm Wash</button>
      </div>
      <div className={layout.sectionImg}>
        <img src={androwash} alt='androwash' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default Androwash