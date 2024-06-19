// components/InvestmentCard.js
import React from 'react';

const InvestmentCard = ({ title, roi, projects }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md text-center">
      <h3 className="text-2xl font-bold">{roi}x</h3>
      <p className="text-gray-600">{projects} projects</p>
      <p className="mt-2 font-semibold">{title}</p>
    </div>
  );
};

export default InvestmentCard;