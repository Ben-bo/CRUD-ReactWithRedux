// import "./App.css";
import Jumbotron from "./component/Jumbotron";
import NavbarComponent from "./component/Navbar";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Createpage, Detailpage, Homepage, Editpage } from "./pages";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Jumbotron />
        <Container>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Homepage />
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
