import React, { Component } from "react";
import { connect } from "react-redux";
import { userById, emptyData } from "../action/userAction";
import DetailComponent from "../component/detailComponent";
class Detailpage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(userById(id));
    this.props.dispatch(emptyData());
  }

  render() {
    return (
      <div>
        <h1 className="text-center">DetailPage </h1>
        <DetailComponent />
      </div>
    );
  }
}

export default connect()(Detailpage);
