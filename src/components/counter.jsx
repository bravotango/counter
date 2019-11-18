import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let notification = this.props.counter.value === 0 ? "warning" : "primary";
    let classes = "badge m-2 badge-" + notification;
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    if (count >= 1 && count <= 9) {
      return "0" + count;
    }
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
