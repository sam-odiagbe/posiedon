import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log(this.props.match);
  }
  render() {
    return <div>Hello world</div>;
  }
}

export default Test;
