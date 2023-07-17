import React from 'react'
import Image  from '../assets/p1-e1588752477662.png';
import amazon from '../assets/Screenshot 2023-07-15 at 22-41-04 Best IUI Treatment Procedure for Infertility in India.png';
import styles , {layout} from '../style';
const Benefits = () => {
  return (
    <section className={`bg-[#defffc] ${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>DIY ICI with</h2>
        <div className='bg-[#40c7b9] border border-white w-[300px] h-[100px]'>
            <h1 className='text-white '>V-CONCIEVE</h1>
        </div>
        <h2  className={`${styles.heading2}`}>Easy, Smooth & Simple​</h2>
        <img src={amazon} alt='amazon'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={Image} alt='image1' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default Benefits