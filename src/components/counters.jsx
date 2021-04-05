import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props; //destructuring props
    return (
      <React.Fragment>
        <button className="btn btn-primary m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>Counter {counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}
