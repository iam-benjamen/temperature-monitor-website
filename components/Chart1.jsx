import { Line } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Box } from "@chakra-ui/react";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Temperature Chart",
    },
    Tooltip: {
      display: true,
    },
  },
};

const aggregate = (data, index) => {
  const res = [];

  data?.map((item) => {
    res.push(item[index]);
  });

  return res;
};

function formatTime(timestamp) {
  const date = new Date(timestamp);

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

const Chart1 = ({ chartdata }) => {
  const datax = aggregate(chartdata, "temperature");
  const labels = aggregate(chartdata, "time_created").map((item) =>
    formatTime(item)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: datax,
        borderColor: "#FFa908",
        backgroundColor: "white",
      },
    ],
  };

  return (
    <Box width={"45%"} height={"30rem"} display={"flex"} alignItems={"center"}>
      <Line options={options} data={data} />
    </Box>
  );
};

export default Chart1;
