import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const DonutChart = () => {
  // Define your chart data and options here
  const data = {
    labels: ['Red', 'Green', 'Blue'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#FF5733', '#33FF57', '#3366FF'],
      },
    ],
  };

  const options = {
    // Add any chart options you want here
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Doughnut data={data} options={options} />
        <Card.Title>Donut Chart Example</Card.Title>
        <Card.Text>
          <ArrowRightCircle /> Click to see details
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DonutChart;
