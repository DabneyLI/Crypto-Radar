// components/InvestmentChart.js
import { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const InvestmentChart = ({ chartData, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const resizeChart = () => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    window.addEventListener('resize', resizeChart);
    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return (
    <div className="chart-container">
      {chartData && chartData.labels ? (
        <Bar ref={chartRef} data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default InvestmentChart;