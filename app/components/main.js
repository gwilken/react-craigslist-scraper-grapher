import React from "react";
import Search from "./Search";
import Results from "./Results";


class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(

      <div>

        <Search />

        {this.props.children}

      </div>

    )
  }

}

export default Main;
