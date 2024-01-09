import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Import Chart from 'chart.js/auto' instead of 'chart.js'

// Set global configuration
Chart.defaults.elements.line.tension = 0.4;
Chart.defaults.elements.point.radius = 0;
function GraphChart({ data ,  graphName }) {
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "User  Co u n t",
          align: "center",
          font: {
            weight: "bold",
            color: "black",
          },
        },
        ticks: {
          stepSize: 50,
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
        display: true,
        text:"  ",
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
        color: "#fff",
        formatter: () => "",
      },
    },
  };
  return (
    <div className="bg-white rounded-xl shadow-xl px-5 w-[100%]   h-[400px] ">
      <Line className="w-10" data={data}  options={options} />
    </div>
  );
}
export default GraphChart;
