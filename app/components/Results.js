import React from "react";
import Search from "./Search";
import api from "../utils/api";
import BarChart from "./BarChart";

class Results extends React.Component {

  render() {
    return(
      <div>
        <ul>
          {
            this.props.data.map((element) => {
              return(
                <BarChart key={element._id} obj={element} delete={this.props.delete} update={this.props.update} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Results;
