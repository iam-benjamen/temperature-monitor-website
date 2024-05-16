import { Line } from "react-chartjs-2";
import React from 'react';
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
            position: 'top'
        },
        title: {
            display: true,
            text: 'Temperature Chart',
        },
        Tooltip: {
            display: true
        }
    },

};


const aggregate = (data, index) => {
    const res = [];

    data?.map((item) => {
        res.push(item[index]);
    })

    return res;
}


function formatTime(timestamp) {
    // Create a new Date object from the timestamp
    const date = new Date(timestamp);

    // Extract hours, minutes, and seconds
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format the time as HH:MM:SS
    return `${hours}:${minutes}:${seconds}`;
}



const Chart1 = ({ chartdata }) => {

    const datax = aggregate(chartdata, 'temperature');
    const labels = aggregate(chartdata, 'time_created').map(item => formatTime(item));

    const data = {
        labels,
        datasets: [
            {
                label: 'Temperature',
                data: datax,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'white',
            },

        ],
    };

    return (
        <Box width={'45%'} height={'35rem'}>
            <Line options={options} data={data} />
        </Box>
    );
}


export default Chart1;