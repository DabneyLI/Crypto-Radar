// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-50 flex justify-between items-center">
      <div className="text-lg font-bold">Crypto Dashboard</div>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-blue-600">Sign In</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition duration-200 hover:bg-gray-300">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;