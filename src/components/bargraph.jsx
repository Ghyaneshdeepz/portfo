import React, { useMemo } from 'react';
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

import subscriptionData from '../assets/subscription_views.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Bargraph() {
  const barData = useMemo(() => {
    const sortedData = [...subscriptionData].sort((a, b) => {
      // Convert "dd-mm-yyyy" to Date object for sorting
      const [d1, m1, y1] = a.Date.split('-').map(Number);
      const [d2, m2, y2] = b.Date.split('-').map(Number);
      return new Date(y1, m1 - 1, d1) - new Date(y2, m2 - 1, d2);
    });

    const labels = sortedData.map(d => {
      const [day, month, year] = d.Date.split('-');
      const dateObj = new Date(year, month - 1, day);
      return dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    });

    const views = sortedData.map(d => d.Views);

    return {
      labels,
      datasets: [
        {
          label: 'Views',
          data: views,
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: 'white', font: { size: 14 } },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        cornerRadius: 4,
        caretSize: 6,
      },
      title: {
        display: true,
        text: 'Subscription Views Over Time',
        color: 'white',
        font: { size: 18, weight: 'bold' },
        padding: { top: 10, bottom: 20 },
      },
    },
    scales: {
      x: {
        ticks: { color: 'white', font: { size: 12 } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        title: { display: true, text: 'Date', color: 'white', font: { size: 14, weight: 'bold' } },
      },
      y: {
        beginAtZero: true,
        ticks: { color: 'white', font: { size: 12 }, stepSize: 5 },
        grid: { color: 'rgba(255,255,255,0.15)', borderDash: [5, 5] },
        title: { display: true, text: 'Views', color: 'white', font: { size: 14, weight: 'bold' } },
      },
    },
  };

  return (
    <div className="bg-black/60 p-6 flex flex-col rounded-xl border border-white/20 shadow-lg min-h-[300px]">
      <div className="w-full flex-grow rounded-2xl overflow-hidden bg-black p-4">
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
}
