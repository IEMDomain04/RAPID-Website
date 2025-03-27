import React from 'react';
import { useNavigate } from 'react-router-dom';
import RapidLogo from '../../assets/large-rapid-logo.svg';

function Header() {
  const navigate = useNavigate();


  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center text-white px-8 py-10 mt-24 sm:mt-40">
      {/* Left Section */}
      <div data-aos="fade-right" data-aos-duration="3000" className="text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-3">RAPID</h1>
        <h3 className="text-xl sm:text-2xl font-light">Real-Time. Collab. Connect. Develop. Innovate.</h3>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 mt-12 justify-center md:justify-start">
          <button
            type="button"
            onClick={() => window.open('https://docs.google.com/presentation/d/1H0eUeTsffrGpgM0-4ekE0vUyqOivGZS9neg8yWOg6oc/edit#slide=id.ge4c37861fa_0_354')
            }
            className="bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition"
          >
            See website case study
          </button>
          <button
            type="button"
            onClick={() => navigate('/about')}
            className="border-2 border-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 md:ml-20">
        <img src={RapidLogo} alt="RAPID Logo" loading="lazy" data-aos="fade-left" data-aos-duration="3000" className="h-48 w-auto sm:h-40 md:h-50 lg:h-64" />
      </div>
    </div>
  );
}

export default Header;
