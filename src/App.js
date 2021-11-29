// import "./App.css";
import Jumbotron from "./component/Jumbotron";
import NavbarComponent from "./component/Navbar";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Createpage, Detailpage, Homepage, Editpage } from "./pages";
class App extends Component {
  state = {
    nama: "beni",
    users: [
      {
        id: 1,
        nama: "beni",
        umur: 24,
      },
      {
        id: 2,
        nama: "ahmad",
        umur: 24,
      },
      {
        id: 3,
        nama: "edwin",
        umur: 24,
      },
      {
        id: 4,
        nama: "akshajsh",
        umur: 24,
      },
      {
        id: 5,
        nama: "janbxg",
        umur: 24,
      },
      {
        id: 6,
        nama: "jnahf",
        umur: 24,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Jumbotron name={this.state.nama} />
        <Container>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Homepage dataUser={this.state.users} />
              </Route>
              <Route path="/create">
                <Createpage />
              </Route>
              <Route path="/edit/:id">
                <Editpage />
              </Route>
              <Route path="/detail/:id">
                <Detailpage />
              </Route>
            </Switch>
          </BrowserRouter>

          <h1>helojj</h1>
        </Container>
      </div>
    );
  }
}

export default App;
