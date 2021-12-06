import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../action/userAction";
import Formcomponent from "../component/formComponent";

class Createpage extends Component {
  handleSubmit(data) {
    this.props.dispatch(postData(data));
  }
  render() {
    return (
      <div style={{ height: 500 }}>
        <h1 className="text-center">Form Input</h1>
        <hr />
        <Formcomponent onSubmit={(data) => this.handleSubmit(data)} />
      </div>
    );
  }
}

export default connect()(Createpage);
