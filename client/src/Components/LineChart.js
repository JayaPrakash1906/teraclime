import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// LineChart component
const LineChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows customization of the height and width
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Steps Count',
      
      },
    },
  };

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      
      {
        label: 'Consumption(litres)',
        data: [3500, 9000, 2500, 4000, 2000, 5000, 7000],
        borderColor: 'rgb(75,192,192)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ width: '800px', height: '400px', margin: '0 auto' }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
