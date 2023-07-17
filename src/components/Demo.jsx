import React from 'react'
import wash from '../assets/Screenshot 2023-07-15 at 22-08-53 Best IUI Treatment Procedure for Infertility in India.png';
import demonstration from '../assets/Screenshot 2023-07-15 at 22-09-13 Best IUI Treatment Procedure for Infertility in India.png';
import styles , { layout} from '../style';
const Demo = () => {
  return (
    <section className={`${layout.section} gap-2 mr-8`}>
      <div className='flex flex-col items-center'>
        <h2 className={`${styles.heading2}`}>Androwash Demo in English</h2>
        <div className={layout.sectionImg}>
          <img src={wash} alt='wash'/>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className={`${styles.heading2}`}>Androwash डेमो हिंदी में </h2>
        <div className={layout.sectionImg}>
          <img src={demonstration} alt='demo'/>
        </div>
      </div>
    </section>
  )
}

export default Demo