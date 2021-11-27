import "./App.css";
import Jumbotron from "./component/Jumbotron";
import NavbarComponent from "./component/Navbar";

import React, { Component } from "react";

class App extends Component {
  state = {
    nama: "beni",
  };
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Jumbotron name={this.state.nama} />
        <h1>helojj</h1>
      </div>
    );
  }
}

export default App;
