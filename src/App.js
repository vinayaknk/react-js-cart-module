import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterID => {
    const newcounters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: newcounters });
  };
  handleIncerement = counterxyz => {
    const newcounters = [...this.state.counters];
    const index = newcounters.indexOf(counterxyz);
    newcounters[index] = { ...counterxyz };
    newcounters[index].value++;
    this.setState({ counters: newcounters });
  };
  handleReset = () => {
    const resetCounter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: resetCounter });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounts={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncerement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;


