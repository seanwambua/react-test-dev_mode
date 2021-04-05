import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value,
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {" "}
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: this.state.value })}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}
