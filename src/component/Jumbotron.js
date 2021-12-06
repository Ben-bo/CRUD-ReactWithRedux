import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return { nama: state.user.nama };
};

function Jumbotron(props) {
  return (
    <Card
      className="shadow-sm mb-4 text-center"
      style={{ border: "none", height: 250 }}
      bg="light"
    >
      <Card.Title className="my-3">
        <h1>Welcome {props.nama}</h1>{" "}
      </Card.Title>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}
export default connect(mapStateToProps, null)(Jumbotron);
