import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
  };

  handleTopLeftInputChange = e => this.setState({ topLeft: e.target.value });
  handleTopRightInputChange = e => this.setState({ topRight: e.target.value });
  handleBottomLeftInputChange = e =>
    this.setState({ bottomLeft: e.target.value });
  handleBottomRightInputChange = e =>
    this.setState({ bottomRight: e.target.value });

  render() {
    return (
      <div id="main-container">
        <div
          id="box"
          style={{
            borderTopLeftRadius: this.state.topLeft + "px",
            borderTopRightRadius: this.state.topRight + "px",
            borderBottomLeftRadius: this.state.bottomLeft + "px",
            borderBottomRightRadius: this.state.bottomRight + "px"
          }}
        />
        <div id="input-container">
          <input
            id="top-left"
            type="number"
            value={this.state.topLeft}
            onChange={this.handleTopLeftInputChange}
          />
          <input
            id="top-right"
            type="number"
            value={this.state.topRight}
            onChange={this.handleTopRightInputChange}
          />
          <input
            id="bottom-left"
            type="number"
            value={this.state.bottomLeft}
            onChange={this.handleBottomLeftInputChange}
          />
          <input
            id="bottom-right"
            type="number"
            value={this.state.bottomRight}
            onChange={this.handleBottomRightInputChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
