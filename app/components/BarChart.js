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
      target: this.props.obj.target,
      createdAt: this.props.obj.createdAt,
      favorite: this.props.obj.favorite,
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

      <div className="graphContainer">

        <Bar data={this.state.data}
            options={chartOptions}
            width={800}
            height={150}
        />

        {/* <div className="titlebar">
          <h2 className="search-title"> {this.state.target} </h2>
          <h2 className="search-updatedAt"> {this.state.updatedAt} </h2>
        </div> */}

      </div>
    )
  }

}

export default BarChart;
