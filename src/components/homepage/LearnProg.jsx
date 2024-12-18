import React from 'react'
import RapidImg from '../../assets/rapid-ui.svg'

function LearnProg() {
  return (
    <div className='block justify-center text-center px-8 py-10 space-y-5 mt-20'>
      <h1 data-aos="fade-up" data-aos-duration="2000" className='text-3xl text-white font-bold sm:text-5xl md:text-3xl'>
        Learn. Progress. Share. Collab.
      </h1>

      <p data-aos="fade-up" data-aos-duration="2000" className='text-1xl text-white opacity-50 w-10/12 my-0 mx-auto'>Join our vibrant learning IDE platform where you can track your progress and connect with a supportive community.</p>
      <img data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500" className='my-0 mx-auto' src={RapidImg} alt="Rapid-UI" loading='lazy' />
    </div>
  )
}

export default LearnProg
