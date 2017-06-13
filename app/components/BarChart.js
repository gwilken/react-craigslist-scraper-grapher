import React from "react";

import {Bar} from 'react-chartjs-2';

const chartOptions = {
//onClick: graphClickEvent,
  maintainAspectRatio: false,
  hover: {
    animationDuration: 0
  },
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
  }],
  xAxes: [{
    display: false
  }]
  }
}


class BarChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: this.props.obj.titles,
        datasets: [
          {
            label: 'Price',
            data: this.props.obj.prices,
            backgroundColor: 'magenta',
            borderWidth: 1
          }
      ]
      }
    }
  }

  render() {
    return(
      <div>
        <Bar data={this.state.data}
            options={chartOptions}
            width={800}
            height={200}
        />
      </div>
    )
  }

}

export default BarChart;
