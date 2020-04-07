import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

// base URL http://localhost:6001

// GET: /bots
// POST: /bots
// DELETE: /bots/:id

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
