import React from "react";

import Child from "./Child";

class Search extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(

      <div>

        <h2>Search</h2>

        {<Child />}
        {this.props.children}

      </div>

    )
  }

}

export default Search;
