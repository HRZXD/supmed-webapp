import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve username from localStorage (assuming it's saved during login)
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl tracking-widest font-bold text-gray-900">
              SUPMED
            </div>
            <div className="hidden md:flex items-center space-x-4 ml-10">
              <a href="/" className="text-gray-900 hover:text-gray-700">
                Home
              </a>
              <a href="/" className="text-gray-900 hover:text-gray-700">
                About
              </a>
              <a href="/" className="text-gray-900 hover:text-gray-700">
                Services
              </a>
            </div>
          </div>
          <div className="flex items-center">
            {username ? (
              <>
                <span className="text-gray-900 mr-4">Welcome, {username}</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-900 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <a
                href="/login"
                className="text-gray-900 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Login
              </a>
            )}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/"
              className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/"
              className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="/"
              className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            {username ? (
              <>
                <span className="block text-gray-900 px-3 py-2 rounded-md text-base font-medium">Welcome, {username}</span>
                <button
                  onClick={handleLogout}
                  className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <a
                href="/login"
                className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
