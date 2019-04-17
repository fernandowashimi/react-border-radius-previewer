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
        >
          <div id="code-container">
            <code>
              <p>#box {"{"}</p>
              <p>
                <pre>
                  border-top-left-radius: <span>{this.state.topLeft}px;</span>
                </pre>
              </p>
              <p>
                <pre>
                  border-top-right-radius: <span>{this.state.topRight}px;</span>
                </pre>
              </p>
              <p>
                <pre>
                  border-bottom-left-radius:{" "}
                  <span>{this.state.bottomLeft}px;</span>
                </pre>
              </p>
              <p>
                <pre>
                  border-bottom-right-radius:{" "}
                  <span>{this.state.bottomRight}px;</span>
                </pre>
              </p>
              <p>{"}"}</p>
            </code>
          </div>
        </div>
        <div id="input-container">
          <p>
            Top-left:{" "}
            <input
              id="top-left"
              type="number"
              value={this.state.topLeft}
              onChange={this.handleTopLeftInputChange}
            />{" "}
            px
          </p>
          <p>
            Top-right:{" "}
            <input
              id="top-right"
              type="number"
              value={this.state.topRight}
              onChange={this.handleTopRightInputChange}
            />{" "}
            px
          </p>
          <p>
            Bottom-left:{" "}
            <input
              id="bottom-left"
              type="number"
              value={this.state.bottomLeft}
              onChange={this.handleBottomLeftInputChange}
            />{" "}
            px
          </p>
          <p>
            Bottom-right:{" "}
            <input
              id="bottom-right"
              type="number"
              value={this.state.bottomRight}
              onChange={this.handleBottomRightInputChange}
            />{" "}
            px
          </p>
        </div>
      </div>
    );
  }
}

export default App;
