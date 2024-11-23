import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import {
  Chart as ChartJS, // import Chart.js components
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register( // register Chart.js components
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
)


function LineGraph() { // create LineGraph component with props
  // define state variables to store dates and consumptions
  const [dates, setDates] = useState([]);
  const [consumptions, setConsumptions] = useState([]);

  const [userID, setUserID] = useState("");

  useEffect(() => { // use useEffect hook to fetch data from API when id prop changes
    setUserID(localStorage.getItem('userID'));

    fetch(`http://localhost:5000/data/${userID}`) // make API request to fetch data
      .then((res) => res.json()) // convert response to JSON format
      .then((data) => {
        const dataArray = data.data; // extract data array from fetched JSON data
        const datesArray = [];
        const consumptionsArray = [];


        for (let i = 0; i < dataArray.length; i++) {
          // Create a new date object from the MySQL date string
          const mysqlDate = new dayjs(dataArray[i].date);

          // Format the date string without the time portion
          const date = mysqlDate.format('YYYY-MM-DD');

          // Extract consumption value for the current item in the data array
          const consumption = dataArray[i].consumption;

          // Store date and consumption values in separate variables or arrays
          datesArray.push(date);
          consumptionsArray.push(consumption);
        }
        setDates(datesArray); // update dates state variable with extracted date values
        setConsumptions(consumptionsArray); // update consumptions state variable with extracted consumption values
      });
  }, [userID]); // re-run useEffect hook whenever id prop changes

  // define data and options objects for Line chart
  const graphData = {
    labels: dates, // use dates state variable for chart labels
    datasets: [
      {
        label: "Consumption",
        data: consumptions, // use consumptions state variable for chart data
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: 'Energy Usage',
        color: 'white'
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white',
          color: 'white'
          
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'white',
          color: 'white'
        },
        gridLines: {
          color: 'white'
        }
      }]
    }
  };

  return (
    <div>
      <Line data={graphData} options={options} redraw> </Line>
    </div>
  );
}

export default LineGraph;
