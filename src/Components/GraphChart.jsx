import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Import Chart from 'chart.js/auto' instead of 'chart.js'

// Set global configuration
Chart.defaults.elements.line.tension = 0.4;
Chart.defaults.elements.point.radius = 0;
function GraphChart({ data, graphName }) {
  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          stepSize: 5,
          min: 50,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Time",
          align: "center",
          font: {
            weight: "bold",
            color: "black",
          },
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: "  ",
        align: "start",
        font: {
          size: 20,
          weight: "bold",
          color: "black",
        },
      },
      legend: {
        position: "bottom",
      },
      datalabels: {
        align: "center",
        anchor: "center",
        color: "#000",
        font: {
          weight: 'bold',
        },
        formatter: (value) => value, // Display the actual value as the label
      },
    },
    elements: {
      line: {
        fill: 'start', // Fill the area below the line
        backgroundColor: 'rgba(222, 230, 225, 0.8)', // Shadow-like shade color
        borderColor: 'rgba(0, 0, 0, 0)', // Hide the line border
      }
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-xl px-5 w-[100%] h-[200px] sm:h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
}
export default GraphChart;
