import React from 'react'
function Learnmore() {
  return (
    <div className='w-9/12 flex flex-col justify-self-center '>
      <div className='px-8 py-10 space-y-5 mt-40'>
        <h1 className='text-5xl text-white font-bold'>What is RAPID?</h1>
        <p className='text-1xl text-white opacity-50'>
          RAPID (Real-time Application Programming Integrated Development) is an IDE application that allows programmers and developers to collaborate easily with real-time editing. It provides different programming languages and compilers for development.
        </p>
      </div>

      <hr className='w-full' />

      <div>
        <div className='px-8 py-10 space-y-5 mt-10'>
          <h1 className='text-5xl text-white font-bold'>Industry Analysis</h1>
          <p className='text-1xl text-white opacity-50'>
            RAPID distinguishes itself in the software development industry with several unique features:
          </p>
        </div>

        <section className='space-y-14'>
          <div className='px-8 py-8 space-y-5 bg-gray-900 border border-blue-600 rounded-md'>
            <h1 className='text-3xl text-white font-bold'>Real-time Collaboration </h1>
            <p className='text-1xl text-white opacity-50'>
              Unlike traditional IDEs, RAPID offers real-time editing and compiling, allowing multiple developers to work on the same project simultaneously, which significantly enhances productivity and team coordination.
            </p>
          </div>

          <div className='px-8 py-8 space-y-5 bg-gray-900 border border-blue-600 rounded-md'>
            <h1 className='text-3xl text-white font-bold'>Cross-Language Support</h1>
            <p className='text-1xl text-white opacity-50'>
              RAPID supports a wide range of programming languages and compilers, catering to the diverse needs of developers and organizations.
            </p>
          </div>

          <div className='px-8 py-8 space-y-5 bg-gray-900 border border-blue-600 rounded-md'>
            <h1 className='text-3xl text-white font-bold'>Global Accessibility</h1>
            <p className='text-1xl text-white opacity-50'>
              The application is designed for seamless collaboration among developers from different geographical locations, making it ideal for remote teams.
            </p>
          </div>
        </section>


      </div>
    </div>
  )
}

export default Learnmore
