import React, { Component } from "react";
import TableComponent from "../component/TableComponent";

class Homepage extends Component {
  render() {
    return (
      <div>
        <TableComponent dataTable={this.props.dataUser} />
      </div>
    );
  }
}

export default Homepage;
