// pages/index.js
import React, { useState } from 'react';
import InvestmentChart from '../components/InvestmentChart';
import InvestmentForm from '../components/InvestmentForm';

const Home = () => {
  const [investments, setInvestments] = useState([]);

  const handleAddInvestment = (investment) => {
    setInvestments([...investments, investment]);
  };

  const calculateInvestmentData = () => {
    const investors = [...new Set(investments.map(investment => investment.investor))];
    const fields = [...new Set(investments.map(investment => investment.field))];

    const data = fields.map(field => {
      return investors.map(investor => {
        const investorInvestments = investments.filter(investment => investment.investor === investor && investment.field === field);
        const totalInvestment = investments.filter(investment => investment.investor === investor)
                                            .reduce((sum, investment) => sum + investment.amount, 0);
        const fieldInvestment = investorInvestments.reduce((sum, investment) => sum + investment.amount, 0);
        return totalInvestment ? (fieldInvestment / totalInvestment) * 100 : 0;
      });
    });

    return { labels: investors, fields, data };
  };

  const { labels, fields, data } = calculateInvestmentData();

  const chartData = {
    labels,
    datasets: fields.map((field, index) => ({
      label: field,
      backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
      data: data[index],
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
        ticks: {
          callback: function(value) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Crypto Radar: Insights into Crypto Trends</h1>
      <InvestmentForm onAddInvestment={handleAddInvestment} />
      <InvestmentChart chartData={chartData} options={options} />
    </div>
  );
};

export default Home;