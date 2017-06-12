import React from "react";

import Search from "../components/Search"
import Child2 from "../components/Child2"


class Child extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(

      <div>

        <h2>Child</h2>

        {<Child2 />}
        {this.props.children}

      </div>

    )
  }

}

export default Child;
