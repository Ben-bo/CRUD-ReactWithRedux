import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { postData } from "../action/userAction";
import Formcomponent from "../component/formComponent";

const mapStateToProps = (state) => {
  return { users: state.user.resDataUser, error: state.user.errorResData };
};
class Createpage extends Component {
  handleSubmit(data) {
    this.props.dispatch(postData(data));
  }
  render() {
    if (this.props.users) {
      swal({
        title: "Good job!",
        text: `Data ${this.props.users.nama} berhasil disimpan`,
        icon: "success",
        button: "Aww yiss!",
      });
    }
    return (
      <div style={{ height: 500 }}>
        <h1 className="text-center">Form Input</h1>
        <hr />
        <Formcomponent onSubmit={(data) => this.handleSubmit(data)} />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Createpage);
