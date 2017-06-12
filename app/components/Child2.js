import React from "react";
import api from "../utils/api";

class Child2 extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //this.getSearches();
    api.search('jeep');
  }

  getSearches() {

    api.getSearches().then(function(res) {
      console.log(res);
    })
  }

  render() {
    return(

      <div>

        <h2>Child2</h2>

        {this.props.children}

      </div>

    )
  }

}

export default Child2;
