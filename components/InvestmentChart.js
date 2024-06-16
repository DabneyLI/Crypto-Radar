// components/InvestmentChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InvestmentChart = ({ chartData, options }) => {
  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Investment Projects by Major Investors</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default InvestmentChart;