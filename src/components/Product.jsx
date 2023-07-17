import React from 'react'
import { specialities } from '../constants';
import styles from '../style';
const Product = () => {
  return (
    <div className='flex flex-row h-[500px] items-center'>
        {specialities.map((speciality) => (
          <div key={speciality.id} className={`flex flex-col justify-between items-center border border-radius h-[200px] w-[400px]`}>
            <img src={speciality.img} alt='image' className='w-[100px] h-[100px]'/>
            <h2>{speciality.title}</h2>
            <p className={`${styles.paragraph}`}>{speciality.content}</p>
          </div>

        ))}
    </div>
  )
}

export default Product