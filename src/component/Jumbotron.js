import React from "react";
import { Card } from "react-bootstrap";

export default function Jumbotron({ name }) {
  return (
    <Card className="my-4 shadow-sm" style={{ border: "none" }} bg="light">
      <Card.Title>
        <h1>Welcome {name}</h1>{" "}
      </Card.Title>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}
