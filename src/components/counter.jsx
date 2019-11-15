import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  badge = {
    fontSize: 18
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    console.log("Constructor", this);
  }

  handleIncrement = product => {
    this.setState({ count: this.state.count + 1 });
    console.log("Increment clicked", this);
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl}></img>
        <span style={this.badge} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let notification = this.state.count === 0 ? "warning" : "primary";
    let classes = "badge m-2 badge-" + notification;
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
