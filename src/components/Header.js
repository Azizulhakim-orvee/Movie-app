import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <div className="flex justify-around bg-gray-600">
        <Link to="/">
        <div className="flex flex-row">
          <div className="bg-gradient-to-r from-blue-400 to-red-400 w-10 h-10 rounded-lg"></div>
          <h1 className="text-3xl text-white ml-2 font-mono">Movie App</h1>
        </div>
        </Link>

        <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
        </div>
        </div>
        </div>
    );
};

export default Header;