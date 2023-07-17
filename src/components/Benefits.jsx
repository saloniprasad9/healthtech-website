import React from 'react'
import Image  from '../assets/p1-e1588752477662.png';
import amazon from '../assets/Screenshot 2023-07-15 at 22-41-04 Best IUI Treatment Procedure for Infertility in India.png';
import youtube from '../assets/Screenshot 2023-07-15 at 22-55-40 Best IUI Treatment Procedure for Infertility in India.png';
import styles , {layout} from '../style';
const Benefits = () => {
  return (
    <section className={`bg-[#defffc] ${layout.section}`}>
      <div className={layout.sectionInfo}>
          
      </div>
      <div className={layout.sectionImg}>
        <img src={Image} alt='image' className='w-[100%] h-[100%]'/>
      </div>
      {/* <img src={youtube} alt='youtube' className='mt-20 w-[600px] h-[300px]' /> */}
    </section>
  )
}

export default Benefits