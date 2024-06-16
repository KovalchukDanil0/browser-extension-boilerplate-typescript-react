import React, { Component } from "react";

class GreetingComponent extends Component {
  state = {
    name: "dev",
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}!</p>
        <img src="icon-128.png" alt="extension icon" />
      </div>
    );
  }
}

export default GreetingComponent;
