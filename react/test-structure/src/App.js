import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Bridge } from "./bridge";

class App extends Component {
  constructor(props) {
    super(props);

    this.bridge = new Bridge();
  }

  componentDidMount() {
    this.bridge.register("receiveToken", payload => console.log(payload));
    this.bridge.register("parseCompleted", payload => console.log(payload));
    this.bridge.register("error", error => console.log(error));
  }

  handleClick = event => {
    this.bridge.execute({
      code: event.target.name,
      payload: event.target.name
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button name="receiveToken" onClick={this.handleClick}>
            receiveToken
          </button>
          <button name="parseCompleted" onClick={this.handleClick}>
            parseCompleted
          </button>
          <button name="error" onClick={this.handleClick}>
            raise error
          </button>
        </header>
      </div>
    );
  }
}

export default App;
