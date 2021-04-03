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
    console.log("props", this.props);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {" "}
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: this.state.count })}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

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
