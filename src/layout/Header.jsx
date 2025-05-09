import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-600 focus:outline-none md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="ml-4">
            <h1 className="text-3xl font-bold text-gray-900">Time Management</h1>
            <p className="text-gray-600 mt-1">Track your time, view analytics, and manage daily check-ins.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
