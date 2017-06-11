import React from "react";

class Child extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(

      <div>

        <h2>Child</h2>

        {this.props.children}

      </div>

    )
  }

}

export default Child;
