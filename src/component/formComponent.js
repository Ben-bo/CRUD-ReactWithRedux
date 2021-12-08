import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../validation/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      {...input}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
    />
    {touched &&
      ((error && <p style={{ color: "red" }}>{error}</p>) ||
        (warning && <p style={{ color: "orange" }}>{error}</p>))}
  </Form.Group>
);
const mapStateToProps = (state) => {
  return {
    initialValues: {
      nama: state.user.dataUser.nama,
      umur: state.user.dataUser.umur,
      alamat: state.user.dataUser.alamat,
      nohp: state.user.dataUser.nohp,
    },
  };
};
class Formcomponent extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
          <Row>
            <Col md={6}>
              <Field
                type="text"
                name="nama"
                component={renderField}
                label="Nama"
              />
            </Col>
            <Col md={6}>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat"
              />
            </Col>
            <Col md={6}>
              <Field
                type="text"
                name="umur"
                component={renderField}
                label="Umur"
              />
            </Col>
            <Col md={6}>
              <Field
                type="text"
                name="nohp"
                component={renderField}
                label="NoHP"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                type="submit"
                disabled={this.props.submitting}
                style={{
                  backgroundColor: "#b23cfd",
                  color: "white",
                  borderColor: "#b23cfd",
                }}
              >
                <FontAwesomeIcon icon={faSave} /> Simpan
              </Button>{" "}
              <a
                href="/"
                className="btn"
                style={{
                  backgroundColor: "#b23cfd",
                  color: "white",
                  borderColor: "#b23cfd",
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> KEMBALI
              </a>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
Formcomponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(Formcomponent);
export default connect(mapStateToProps, null)(Formcomponent);
