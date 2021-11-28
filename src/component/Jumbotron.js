import React from "react";
import { Card } from "react-bootstrap";

export default function Jumbotron({ name }) {
  return (
    <Card
      className="shadow-sm mb-4 text-center"
      style={{ border: "none", height: 250 }}
      bg="light"
    >
      <Card.Title className="my-3">
        <h1>Welcome {name}</h1>{" "}
      </Card.Title>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}
