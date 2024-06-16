// components/InvestmentForm.js
import React, { useState } from 'react';

const InvestmentForm = ({ onAddInvestment }) => {
  const [investor, setInvestor] = useState('');
  const [field, setField] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddInvestment({ investor, field, amount: Number(amount) });
    setInvestor('');
    setField('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Investor</label>
        <input
          type="text"
          value={investor}
          onChange={(e) => setInvestor(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Field</label>
        <input
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Add Investment
      </button>
    </form>
  );
};

export default InvestmentForm;