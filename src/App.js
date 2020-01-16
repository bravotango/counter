import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, img: "https://picsum.photos/100" },
      { id: 2, value: 0, img: "https://picsum.photos/200" },
      { id: 3, value: 0, img: "https://picsum.photos/300" },
      { id: 4, value: 0, img: "https://picsum.photos/400" }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
    //this.state = this.props;
  }

  componentDidMount() {
    //Ajax Call
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    console.log("Event Handler Called", counterId);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Renders");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.reduce(
            (acc, { value }) => acc + value,
            0
          )}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
