import React from 'react';
import GroupImg from '../../assets/group-icon.svg';
import EmailImg from '../../assets/email-icon.svg';
import CallImg from '../../assets/call-icon.svg';

function Contacts() {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300" className='mt-48 px-10'>
      <div className='text-center'>
        <h1 className='text-5xl text-white font-bold mb-5'> Share Your Thoughts</h1>
        <p className='text-xl text-white opacity-50'>Have ideas or feedback about our startup? We'd love to hear from you! Share your thoughts and help us improve and grow together.</p>
      </div>

      {/* First Row of Contact Cards */}
      <div className='flex flex-col sm:flex-row justify-center sm:justify-around mt-10'>
        <div className='w-full sm:w-5/12 text-center space-y-8 px-7 py-7 bg-gray-900 border border-blue-600 rounded-md'>
          <img className='my-0 mx-auto' src={GroupImg} alt="User Assistance" loading='lazy' />
          <h1 className='text-xl text-white'>If you need help or have any questions, feel free to reach out to our User Assistance team. We're here to assist you with any inquiries you may have.</h1>
          <p className='text-xl text-white'>
            <span className='font-bold'>Email:</span> support@startuphelp.com
          </p>
        </div>

        <div className='mt-20 w-full sm:w-5/12 text-center space-y-8 px-7 py-7 sm:mt-0 bg-gray-900 border border-blue-600 rounded-md'>
          <img className='my-0 mx-auto' src={EmailImg} alt="Contact Us" loading='lazy' />
          <h1 className='text-xl text-white'>You can send us a message directly through our startup's official email. We value your feedback and are eager to hear from you.</h1>
          <p className='text-xl text-white'>
            <span className='font-bold'>Email:</span> contact@yourstartup.com
          </p>
        </div>
      </div>

      {/* Second Row of Contact Card */}
      <div className='flex justify-center mt-20'>
        <div className='w-full sm:w-5/12 text-center space-y-8 px-7 py-7 bg-gray-900 border border-blue-600 rounded-md'>
          <img className='my-0 mx-auto' src={CallImg} alt="Call Us" loading='lazy' />
          <h1 className='text-xl text-white'>Prefer to speak with us? You can call or text our contact number for immediate assistance.</h1>
          <p className='text-xl text-white'>
            <span className='font-bold'>Contact Number:</span> +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
