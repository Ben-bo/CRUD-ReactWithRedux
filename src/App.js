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
              <Route path="/" component={Homepage} exact />

              <Route path="/create" component={Createpage} />

              <Route path="/edit/:id" component={Editpage} />

              <Route path="/detail/:id" component={Detailpage} />
            </Switch>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;
