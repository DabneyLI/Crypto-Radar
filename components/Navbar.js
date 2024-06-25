// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-50 flex justify-between items-center">
      <div className="text-lg font-heading text-primary">
        <span className="text-2xl font-bold text-primary">Crypto</span>
        <span className="text-2xl font-bold text-secondary">Radar</span>
      </div>
      <div className="space-x-4">
        <button className="bg-primary text-white px-4 py-2 rounded-md transition duration-200 hover:bg-secondary">Sign In</button>
        <button className="bg-secondary text-white px-4 py-2 rounded-md transition duration-200 hover:bg-primary hover:text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;