import React, { Component } from "react";
import { connect } from "react-redux";
import { Increment, Decrement, IncrementAsync } from "../actions";

class Counter extends Component {
  increment = () => {
    this.props.Increment();
  };

  incrementAsync = () => {
    this.props.IncrementAsync();
  };

  decrement = () => {
    this.props.Decrement();
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.incrementAsync}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.numberReducer.count
});

const mapDispatchToProps = {
  Increment,
  Decrement,
  IncrementAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
