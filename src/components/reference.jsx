import React, { useMemo } from 'react';
import { Bar, Line } from 'react-chartjs-2';
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

import chartData from '../assets/chart_data.json';
import Bargraph from './bargraph';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Reference() {
  const videoTitles = useMemo(() => [...new Set(chartData.map(d => d['Video title']))], []);

  const lineData = useMemo(() => {
    const allDates = Array.from(new Set(chartData.map(d => d.Date))).sort((a, b) => a - b);
    const labels = allDates.map(date => {
      const d = new Date(date);
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    });

    const colors = [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(75, 192, 192, 1)',
    ];

    const datasets = videoTitles.map((title, idx) => {
      const videoData = chartData.filter(d => d['Video title'] === title);
      const viewsMap = new Map(videoData.map(d => [d.Date, d.Views]));
      const data = allDates.map(date => viewsMap.get(date) ?? 0);

      return {
        label: title,
        data,
        borderColor: colors[idx % colors.length],
        backgroundColor: colors[idx % colors.length].replace('1)', '0.2)'),
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      };
    });

    return { labels, datasets };
  }, [videoTitles]);

  const totalViews = useMemo(() => chartData.reduce((sum, d) => sum + d.Views, 0), []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'YouTube Views Over Time',
        color: 'white',
        font: {
          size: 18,
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'white',
          font: { size: 14 },
          boxWidth: 18,
          padding: 15,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        cornerRadius: 4,
        caretSize: 6,
        displayColors: true,
        mode: 'nearest',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
          maxRotation: 45,
          minRotation: 30,
          autoSkip: true,
          maxTicksLimit: 10,
          font: { size: 12 },
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
          drawBorder: false,
        },
        title: {
          display: true,
          text: 'Date (Month-Day)',
          color: 'white',
          font: { size: 14, weight: 'bold' },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
          font: { size: 12 },
          stepSize: 100,
        },
        grid: {
          color: 'rgba(255,255,255,0.15)',
          borderDash: [5, 5],
        },
        title: {
          display: true,
          text: 'Views',
          color: 'white',
          font: { size: 14, weight: 'bold' },
        },
      },
    },
  };

  return (
    <div className="h-auto pb-5 px-4 sm:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col w-full justify-center pt-10 text-center">
        <h1 className="uppercase text-sm font-semibold text-white tracking-widest">Exploring</h1>
        <h1 className="text-3xl font-bold text-white my-2">
          My YouTube{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 italic to-pink-500 bg-clip-text text-transparent">
            Channel Data
          </span>
        </h1>

      
        <div className="grid mt-10 w-full grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-2">
          <div className="p-6 bg-black/60 rounded-xl border border-white/20 shadow-lg text-white font-semibold text-center">
            Total Views
            <br />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 italic to-pink-500 bg-clip-text text-transparent">
              {totalViews.toLocaleString()}
            </span>
          </div>

          <div className="p-6 bg-black/60 rounded-xl border border-white/20 shadow-lg text-white font-semibold text-center">
            Total Subscribers
            <br />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 italic to-pink-500 bg-clip-text text-transparent">
              25
            </span>
          </div>

          <div className="p-6 bg-black/60 rounded-xl border border-white/20 shadow-lg text-white font-semibold text-center">
            Total Watch Time
            <br />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 italic to-pink-500 bg-clip-text text-transparent">
              14 Hours
            </span>
          </div>
        </div>

        <div className="min-h-[60vh] mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2">
         
          <div className="bg-black/60 p-6 flex flex-col rounded-xl border border-white/20 shadow-lg">
            <div className="w-full flex-grow rounded-2xl overflow-hidden bg-black p-4 sm:p-5 min-h-[300px]">
              <Line data={lineData} options={options} />
            </div>
            <h2 className="font-bold mt-6 text-2xl text-white text-left">Views Over Time</h2>
            <p className="text-sm text-gray-400 mt-1 text-left">
              Each line represents views for a different video, tracked by date.
            </p>
          </div>

         <Bargraph/>
          
        </div>
      </div>
    </div>
  );
}
