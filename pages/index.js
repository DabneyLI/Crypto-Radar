// pages/index.js
import React, { useState } from 'react';
import InvestmentChart from '../components/InvestmentChart';
import InvestmentCard from '../components/InvestmentCard';
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

  const colors = {
    'Blockchain Service': '#1f77b4',
    'Blockchain Infrastructure': '#ff7f0e',
    'NFT': '#2ca02c',
    'DeFi': '#d62728',
    'Chain': '#9467bd',
    'Social': '#8c564b',
    'GameFi': '#e377c2',
    'CeFi': '#7f7f7f',
    'Stablecoin': '#bcbd22',
    'Meme': '#17becf',
    'DePin': '#1f77b4',
    'AI': '#ff7f0e',
    'RWA': '#2ca02c',
  };

  const chartData = {
    labels: investors,
    datasets: fields.map((field, index) => ({
      label: field,
      backgroundColor: colors[field] || `#${Math.floor(Math.random()*16777215).toString(16)}`, // 如果没有指定颜色，则随机生成
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
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div className="pl-8 pt-20 pr-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Top Crypto Funds</h1>
        <div className="mb-6 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Fund of the Day!</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h3 className="text-lg font-bold">Big Brain Holdings</h3>
              <p className="text-gray-600">ROI: 5.18x</p>
            </div>
            <button className="ml-auto bg-primary text-white px-4 py-2 rounded-md transition duration-200 hover:bg-secondary">View</button>
          </div>
        </div>

        <div className="mb-6 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Top Crypto Funds by ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
    </div>
  );
};

export default Home;