import React from 'react';
import StorageImg from '../../assets/rapid-storage.svg';
import LangImg from '../../assets/rapid-languages.svg';

function RapidFeat() {
  return (
    <div className='mt-32 px-10 sm:flex sm:justify-between sm:px-8'>
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="300"
        className='sm:w-5/12 w-full space-y-8 px-7 py-7 bg-gray-900 border border-blue-600 rounded-md'>
        <h1 className='text-3xl sm:text-4xl text-white font-bold'>
          <span className='text-yellow-400'>Flexible</span> Saving Options
        </h1>
        <p className='text-xl sm:text-2xl text-white opacity-50 w-full'>
          Easily save your work with versatile options—directly to your PC, securely to the Cloud, or seamlessly to GitHub. Stay organized and access your projects anytime, anywhere.
        </p>
        <img className='w-full' src={StorageImg} alt="Rapid-UI" />
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-delay="300"
        className='sm:w-5/12 w-full space-y-8 px-7 py-7 bg-gray-900 border border-blue-600 rounded-md text-right mt-8 sm:mt-0'>
        <h1 className='text-3xl sm:text-4xl text-white font-bold'>
          Support for <span className='text-yellow-400'>Multiple</span> Programming Languages
        </h1>
        <p className='text-xl sm:text-2xl text-white opacity-50'>
          Work effortlessly with various programming languages, ensuring compatibility and flexibility for all your development needs. Empower your projects with robust language support.
        </p>
        <img className='ml-auto w-full sm:w-auto' src={LangImg} alt="Rapid-UI" />
      </div>
    </div>
  );
}

export default RapidFeat;
