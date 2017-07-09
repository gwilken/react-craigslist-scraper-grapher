import React from "react";
import api from "../utils/api.js";
import {Bar} from 'react-chartjs-2';
import moment from 'moment';

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
        datasets: [{
            label: 'Price',
            data: this.props.obj.prices,
            backgroundColor: 'cyan',
            borderWidth: 1
          }]
      }
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleUpdate(event) {
    api.update(event.target.value, this.state.target).then((res) => {
      console.log('at barchart:', res);

      console.log('before', this.state);

      var stateCopy = Object.assign({}, this.state);

      stateCopy.updatedAt = res.updatedAt;
      stateCopy.data.labels = res.titles;
      stateCopy.data.datasets[0].data = res.prices;

      this.setState(stateCopy);

      console.log('after', this.state);

    });
  }

  handleDelete(event) {
    this.props.delete(event.target.value);
  }

  handleClick(event, arr) {
    var index = arr[0]._index;

    api.getLink(this.state.id, index).then((res) => {
      console.log(res);
      window.open(res, "_parent");
    });
  }

  handleFavorite(event) {
    if(parseInt(this.state.favorite) === 1) {
      this.setState({favorite: 0});

      api.setFavorite(this.state.id, 0);

    } else {
      this.setState({favorite: 1});
      api.setFavorite(this.state.id, 1);
    }
  }

  prettyTime() {
    var updated = moment(this.state.updatedAt).calendar();
    return(updated);
  }

  favoriteIcon() {

    var isSelected;

    if(parseInt(this.state.favorite) === 1) {
      isSelected = "selected material-icons";
    } else {
      isSelected = "unselected material-icons";
    }

    return (
        <i className= { isSelected } >favorite </i>
    )

  }

  render() {

    const chartOptions = {
      onClick: this.handleClick,
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

          <button value={this.state.id }
            className="favorite mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
            onClick={this.handleFavorite}>
            { this.favoriteIcon() }
          </button>

        </div>
      </div>
    )
  }

}

export default BarChart;
