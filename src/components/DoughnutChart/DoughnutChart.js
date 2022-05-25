import React, { useState } from "react";
import "./DoughnutChart.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = ({ percentage, issue }) => {
  const [data, setData] = useState({
    labels: [`Your result: ${percentage}%`],
    datasets: [
      {
        label: issue,
        data: [percentage, 100 - percentage],
        backgroundColor: ["#1E3456", "#A7DADC"],
        borderColor: ["#1E3456", "#A7DADC"],
        borderWidth: 0.1,
      },
    ],
  });

  const [options, setOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  });

  return (
    <div className="doughnut-holder">
      <p>{issue}</p>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
