import React, { useState } from 'react';

function Pricing() {
  const [activePlan, setActivePlan] = useState('personal'); // State to track active button

  return (
    <div>
      {/* Pricing Header */}
      <div data-aos="fade-up" data-aos-duration="1000" className='block justify-center text-center px-8 py-10 space-y-5 mt-40'>
        <h1 className='text-4xl text-white font-bold sm:text-5xl'>Pricing</h1>
        <p className='text-1xl text-white opacity-50 w-10/12 my-0 mx-auto'>
          Our pricing plans offer solutions for all users: Basic for essentials, Standard for advanced tools and collaboration, Premium for unlimited access and AI features, and Enterprise for tailored solutions and analytics.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className='flex justify-center mb-20'>
        <button
          type="button"
          onClick={() => setActivePlan('personal')}
          className={`border-2 border-blue-600 px-20 py-2 transition sm:px-10 ${
            activePlan === 'personal' ? 'bg-blue-600 text-white' : 'text-white hover:bg-blue-600 hover:text-white'
          }`}
        >
          Personal
        </button>
        <button
          type="button"
          onClick={() => setActivePlan('enterprise')}
          className={`border-2 border-blue-600 px-20 py-2 transition sm:px-10 ${
            activePlan === 'enterprise' ? 'bg-blue-600 text-white' : 'text-white hover:bg-blue-600 hover:text-white'
          }`}
        >
          Enterprise
        </button>
      </div>

      {/* Pricing Plans */}
      <section data-aos="fade-up" data-aos-duration="1000" className='block space-y-10 mx-5 sm:flex justify-center space-x-10 '>
        {activePlan === 'personal' && (
          <>
            {/* Free Tier */}
            <div className='block w-auto rounded border border-blue-500 h-auto text-left py-10 px-10 space-y-7 bg-gray-900'>
              <h1 className='text-3xl text-white font-bold sm:text-4xl'>Free Tier</h1>
              <p className='text-1xl text-white opacity-50 w-10/12'>Free</p>
              <ul className='text-white ml-5 w-64 list-disc'>
                <li>Limited features</li>
                <li>Limited Programming languages</li>
                <li>Up to 2 collaborators</li>
                <li>Community forums and basic support</li>
              </ul>
              <button className='border-2 border-blue-600 text-white px-20 py-2 w-72 rounded-md hover:bg-blue-600 transition sm:px-10'>
                Download RAPID
              </button>
            </div>

            {/* Standard Plan */}
            <div className='block w-auto rounded border border-blue-500 h-auto text-left py-10 px-10 space-y-7 bg-gray-900'>
              <h1 className='text-3xl text-white font-bold sm:text-4xl'>Standard Plan</h1>
              <p className='text-1xl text-white opacity-50 w-10/12'>PHP 600/month</p>
              <ul className='text-white ml-5 w-64 list-disc'>
                <li>All programming languages</li>
                <li>Up to 5 collaborators with real-time editing and code review</li>
                <li>Priority support and basic Git integration</li>
              </ul>
              <button className='border-2 border-blue-600 text-white px-20 py-2 w-72 rounded-md hover:bg-blue-600 transition sm:px-10'>
                Download RAPID
              </button>
            </div>

            {/* Premium Plan */}
            <div className='block w-auto rounded border border-blue-500 h-auto text-left py-10 px-10 space-y-7 bg-gray-900'>
              <h1 className='text-3xl text-white font-bold sm:text-4xl'>Premium Plan</h1>
              <p className='text-1xl text-white opacity-50 w-10/12'>PHP 2000/month</p>
              <ul className='text-white ml-5 w-64 list-disc'>
                <li>Unlimited collaborators</li>
                <li>Advanced tool integrations and AI-powered features</li>
                <li>Faster dedicated support and customizable workspaces</li>
              </ul>
              <button className='border-2 border-blue-600 text-white px-20 py-2 w-72 rounded-md hover:bg-blue-600 transition sm:px-10'>
                Download RAPID
              </button>
            </div>
          </>
        )}

        {activePlan === 'enterprise' && (
          <div data-aos="fade-up" data-aos-duration="1000" className='block w-auto rounded border border-blue-500 h-auto text-left py-10 px-10 space-y-7 bg-gray-900'>
            <h1 className='text-3xl text-white font-bold sm:text-4xl'>Enterprise Plan</h1>
            <p className='text-1xl text-white opacity-50 w-10/12'>PHP 5000/month</p>
            <ul className='text-white ml-5 w-64 list-disc'>
              <li>All Premium Plan features</li>
              <li>Tailored solutions for large teams and organizations</li>
              <li>Dedicated account manager</li>
              <li>Comprehensive analytics and reporting tools</li>
              <li>On-premises deployment options for enhanced security</li>
            </ul>
            <button className='border-2 border-blue-600 text-white px-20 py-2 w-72 rounded-md hover:bg-blue-600 transition sm:px-10'>
              Download RAPID
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Pricing;
