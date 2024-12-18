import React from 'react'

function disclaimer() {
  return (
    <div>
      <div className='my-40 w-10/12 sm:w-8/12 sm:my-60 flex flex-col justify-self-center'>
        <div data-aos="fade-up" data-aos-duration="2000" className='px-8 py-10 space-y-5'>
          <h1 className='text-5xl text-white font-bold'>Disclaimer</h1>
          <p className='text-2xl text-white opacity-50'>
            This website contains <span className='border-b border-yellow-300 opacity-100'>confidential and proprietary</span> information created by Group 4.
            <br></br><br></br>This website is issued <span className='border-b border-yellow-300 opacity-100'>exclusively for the subject</span> “The Entrepreneurial Mind” and for Educational Purposes only.
            <br></br><br></br>This website should <span className='border-b border-yellow-300 opacity-100'>not reproduce without the consent</span> of us Group 4.
          </p>
        </div>

        <hr data-aos="fade-up" data-aos-duration="2000" className='w-full' />
      </div>
    </div>
  )
}

export default disclaimer
