import React from "react";

class Main extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(

      <div>

        <h1>Main</h1>

        {this.props.children}

      </div>

    )
  }

}

export default Main;
