import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RapidLogo from '../../assets/small-rapid-logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white border-b border-blue-600 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Left Icon */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    className="h-20 w-auto"
                    src={RapidLogo} // Replace with your logo
                    alt="Logo"
                    loading='lazy'
                  />
                </Link>
              </div>
            </div>

            {/* Center Links */}
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'bg-gray-700' : 'text-gray-300'
                } hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive('/about') ? 'bg-gray-700' : 'text-gray-300'
                } hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className={`${
                  isActive('/pricing') ? 'bg-gray-700' : 'text-gray-300'
                } hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Pricing
              </Link>
            </div>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={() => navigate('/disclaimer')} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
              <button onClick={() => navigate('/disclaimer')} className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                aria-label="Toggle menu"
                onClick={handleMenuToggle}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3`}
        >
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`${
              isActive('/') ? 'bg-gray-700' : 'text-gray-300'
            } hover:bg-gray-700 block px-3 py-2 rounded-md text-sm font-medium`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`${
              isActive('/about') ? 'bg-gray-700' : 'text-gray-300'
            } hover:bg-gray-700 block px-3 py-2 rounded-md text-sm font-medium`}
          >
            About
          </Link>
          <Link
            to="/pricing"
            onClick={handleLinkClick}
            className={`${
              isActive('/pricing') ? 'bg-gray-700' : 'text-gray-300'
            } hover:bg-gray-700 block px-3 py-2 rounded-md text-sm font-medium`}
          >
            Pricing
          </Link>
          <button
            onClick={() => navigate('/disclaimer')}
            className="bg-blue-600 hover:bg-blue-700 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/disclaimer')}
            className="bg-green-600 hover:bg-green-700 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
          >
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
