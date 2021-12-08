import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { users: state.user.dataUser, error: state.user.error };
};
const detailComponent = (props) => {
  return (
    <Card style={{ width: "30rem", margin: "auto" }}>
      <Card.Body>
        <Card.Title>{props.users.nama}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.users.alamat}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {props.users.umur}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {props.users.noHp}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link
          href="/"
          className="btn text-white"
          style={{ backgroundColor: "#b23cfd" }}
        >
          KEMBALI
        </Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default connect(mapStateToProps, null)(detailComponent);
