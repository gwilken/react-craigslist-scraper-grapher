import React from "react";
import {Bar} from 'react-chartjs-2';
import moment from 'moment';


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
      id: this.props.obj._id,
      target: this.props.obj.target,
      createdAt: this.props.obj.createdAt,
      updatedAt: this.props.obj.updatedAt,
      favorite: this.props.obj.favorite,
      data: {
        labels: this.props.obj.titles,
        datasets: [
          {
            label: 'Price',
            data: this.props.obj.prices,
            backgroundColor: 'lightblue',
            borderWidth: 1
          }
      ]
      }
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  handleUpdate(event) {
    this.props.update(event.target.value);
  }

  handleDelete(event) {
    this.props.delete(event.target.value);
  }


  prettyTime() {
    var updated = moment(this.state.updatedAt).calendar();
    return(updated);
  }

  render() {
    return(

      <div>
        <div className="graphContainer">

          <Bar data={this.state.data}
              options={chartOptions}
              width={800}
              height={110}
          />

        </div>

        <div className="titlebar">
          <span className="search-title"> {this.state.target} </span>
          <span className="search-updatedAt"> { this.prettyTime() } </span>

          <button
            value={this.state.id}
            className="update mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={this.handleUpdate}
            >
            Update
          </button>

          <button
            value={this.state.id}
            className="delete mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={this.handleDelete}>
            Delete
          </button>

          <button value={this.state.id } className="favorite mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">

            <i id="" className="unselected material-icons">favorite</i>

          </button>

        </div>

      </div>
    )
  }

}

export default BarChart;
