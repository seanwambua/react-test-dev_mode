import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    return (
      <div>
        <span> {this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
