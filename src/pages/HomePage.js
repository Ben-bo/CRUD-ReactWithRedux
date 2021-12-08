import React, { Component } from "react";
import { connect } from "react-redux";
import { emptyData, userAction } from "../action/userAction";
import TableComponent from "../component/TableComponent";

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(userAction());
    this.props.dispatch(emptyData());
  }
  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(Homepage);
