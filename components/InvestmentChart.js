/*// components/InvestmentChart.js
import React, { useState } from 'react';
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
import 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InvestmentChart = ({ chartData, options }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`mt-6 p-4 bg-white shadow-md rounded-md ${isExpanded ? 'w-full h-full fixed top-0 left-0 z-50' : ''}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Investment Projects by Major Investors</h2>
        <div className="space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {isExpanded ? 'Minimize' : 'Expand'}
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Share
          </button>
        </div>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default InvestmentChart;*/

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
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default InvestmentChart;