import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "id",
    text: "ID",
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "NAMA",
  },
  {
    dataField: "umur",
    text: "UMUR",
  },
  {
    dataField: "link",
    text: "Aksi",
    formatter: (contentRow, row) => {
      return (
        <div>
          <Button variant="primary" style={{ marginRight: 5 }}>
            <FontAwesomeIcon /> Detail
          </Button>
          <Button variant="success" style={{ marginRight: 5 }}>
            <FontAwesomeIcon /> Edit
          </Button>
          <Button variant="danger" style={{ marginRight: 5 }}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      );
    },
  },
];

const TableComponent = ({ dataTable }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Header
          className="mb-2"
          style={{ backgroundColor: "#b23cfd", color: "white", fontSize: 20 }}
        >
          DATA
        </Card.Header>
        <BootstrapTable
          headerWrapperClasses="foo"
          keyField="id"
          data={dataTable}
          columns={columns}
        />
      </Card.Body>
    </Card>
  );
};

export default TableComponent;
