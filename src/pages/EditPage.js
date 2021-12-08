import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { editData, emptyData, userById } from "../action/userAction";
import FormComponent from "../component/formComponent";
const mapStateToProps = (state) => {
  return { users: state.user.resDataUser, error: state.user.errorResData };
};
class Editpage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(userById(id));
    this.props.dispatch(emptyData());
  }
  handleSubmit(data) {
    const id = this.props.match.params.id;
    this.props.dispatch(editData(id, data));
  }
  render() {
    if (this.props.users) {
      swal({
        title: "Good job!",
        text: `Data ${this.props.users.nama} berhasil diubah`,
        icon: "success",
        button: "Aww yiss!",
      });
    }
    return (
      <div>
        <h1 className="text-center">EditPage</h1>
        <hr />
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Editpage);
