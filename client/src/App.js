import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  //Our endpoint is going to be our host we deploy
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    //Needs a backend to listen too (endpoint);
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response ? (
          <p>The temperature in San Francisco is: {response} °F</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default App;
