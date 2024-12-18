import React from 'react'
import RapidBp from '../../assets/rapid-bp.pdf'

function Introtext() {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className='block justify-center text-center px-8 py-10 space-y-5 mt-20'>
      <h1 className='text-4xl text-white font-bold sm:text-5xl'> Startup project.</h1>
      <p className='text-1xl text-white opacity-50 w-10/12 my-0 mx-auto'>Explore our exciting startup project developed as part of The Entrepreneurial Mind course. This initiative showcases creativity, innovation, and problem-solving, reflecting our journey of turning ideas into impactful solutions.</p>
      <button type="button" onClick={() => window.open(RapidBp, '_blank')} className='border-2 border-blue-600 text-white px-20 py-2 rounded-md hover:bg-blue-600 hover:text-white transition sm:px-10'>See Business Plan</button>
    </div>
  )
}

export default Introtext
