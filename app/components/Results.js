import React from "react";
import Search from "./Search";
import api from "../utils/api";

import BarChart from "./BarChart";


class Results extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    }

  }

  render() {

    return(

      <div>
        <ul>
          {
            this.props.data.map((element) => {
              return(
                <BarChart key={element._id} obj={element}/>
              )
            })
          }
        </ul>
      </div>

    )
  }

}

export default Results;
