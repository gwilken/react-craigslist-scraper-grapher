import React from "react";
import Search from "./Search";
import api from "../utils/api";

import Graph from "./Graph";


class Results extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  componentDidMount() {
    fetch('/all')
      .then((res) => res.json())
      .then(function(data) {
        this.setState( {results: data} )
        //console.log(this.state.results);
      }.bind(this))
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.state.results.map((element) => {
              return(
                <Graph key={element._id} titles={element.titles} prices={element.prices} />
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default Results;
