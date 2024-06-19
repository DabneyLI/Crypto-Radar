/*// pages/index.js
import React, { useState } from 'react';
import InvestmentChart from '../components/InvestmentChart';
import { investmentData } from '../data/data';

const Home = () => {
  const [startDate, setStartDate] = useState('2021-06-01');
  const [endDate, setEndDate] = useState('2024-06-18');

  const handleDateChange = (e) => {
    if (e.target.name === 'start') {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  const filteredData = investmentData.filter(item => 
    new Date(item.date) >= new Date(startDate) && new Date(item.date) <= new Date(endDate)
  );

  const investors = [...new Set(filteredData.map(item => item.investor))];
  const fields = [...new Set(filteredData.map(item => item.field))];

  const chartData = {
    labels: investors,
    datasets: fields.map((field, index) => ({
      label: field,
      backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
      data: investors.map(investor => {
        const totalInvestment = filteredData
          .filter(item => item.investor === investor)
          .reduce((sum, item) => sum + item.amount, 0);
        const fieldInvestment = filteredData
          .filter(item => item.investor === investor && item.field === field)
          .reduce((sum, item) => sum + item.amount, 0);
        return totalInvestment ? (fieldInvestment / totalInvestment) * 100 : 0;
      }),
    })),
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          callback: value => `${value}%`,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Crypto Radar: Insights into Crypto Trends</h1>
      <div className="flex space-x-4 mb-6">
        <div>
          <label className="block text-gray-700">Start Date</label>
          <input
            type="date"
            name="start"
            value={startDate}
            onChange={handleDateChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">End Date</label>
          <input
            type="date"
            name="end"
            value={endDate}
            onChange={handleDateChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      <InvestmentChart chartData={chartData} options={options} />
    </div>
  );
};

export default Home;*/

// pages/index.js
import React from 'react';
import InvestmentCard from '../components/InvestmentCard';
import InvestmentChart from '../components/InvestmentChart';
import { investmentData } from '../data/data';

const Home = () => {
  const chartData = {
    labels: ['Coinbase', 'Digital Currency Group', 'Paradigm', 'Pantera Capital', 'Ribbit Capital'],
    datasets: [
      {
        label: 'DeFi',
        backgroundColor: 'blue',
        data: [16, 15, 12, 11, 10],
      },
      {
        label: 'NFT',
        backgroundColor: 'red',
        data: [5, 6, 7, 8, 9],
      },
      {
        label: 'Infrastructure',
        backgroundColor: 'green',
        data: [2, 3, 4, 5, 6],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Top Crypto Funds</h1>
      <div className="mb-6 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Fund of the Day!</h2>
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <h3 className="text-lg font-bold">Big Brain Holdings</h3>
            <p className="text-gray-600">ROI: 5.18x</p>
          </div>
          <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-blue-600">View</button>
        </div>
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Top Crypto Funds by ROI</h2>
        <div className="grid grid-cols-5 gap-6">
          <InvestmentCard title="USV" roi="43.3" projects="19" />
          <InvestmentCard title="Andreessen Horowitz" roi="38.0" projects="4" />
          <InvestmentCard title="Paradigm" roi="24.2" projects="31" />
          <InvestmentCard title="Pantera Capital" roi="20.8" projects="24" />
          <InvestmentCard title="Ribbit Capital" roi="17.8" projects="17" />
        </div>
      </div>

      <div className="p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Investment Chart</h2>
        <InvestmentChart chartData={chartData} options={options} />
      </div>
    </div>
  );
};

export default Home;