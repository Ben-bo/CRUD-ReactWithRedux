import BootstrapTable from "react-bootstrap-table-next";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteData, userAction } from "../action/userAction";
const { SearchBar } = Search;

const handleDelete = (dispatch, id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this Data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteData(id));
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
      dispatch(userAction());
    } else {
      swal("Your data is safe!");
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];
const mapStateToProps = (state) => {
  return { users: state.user.dataUser, error: state.user.error };
};
const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "nama",
      text: "NAMA",
      sort: true,
    },
    {
      dataField: "umur",
      text: "UMUR",
      sort: true,
    },
    {
      dataField: "link",
      text: "Aksi",
      formatter: (contentRow, row) => {
        return (
          <div>
            <Link to={`/detail/${row.id}`}>
              <Button variant="primary" style={{ marginRight: 5 }}>
                {" "}
                <FontAwesomeIcon /> Detail
              </Button>
            </Link>
            <Link to={`/edit/${row.id}`}>
              <Button variant="success" style={{ marginRight: 5 }}>
                <FontAwesomeIcon /> Edit
              </Button>
            </Link>
            <Button
              variant="danger"
              style={{ marginRight: 5 }}
              onClick={() => handleDelete(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        );
      },
    },
  ];
  if (props.users) {
    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        {" "}
        Showing {from} to {to} of {size} Results
      </span>
    );

    const options = {
      paginationSize: 4,
      pageStartIndex: 0,
      alwaysShowAllBtns: true, // Always show next and previous button
      // withFirstAndLast: false, // Hide the going to First and Last page button
      // hideSizePerPage: true, // Hide the sizePerPage dropdown always
      // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      paginationTotalRenderer: customTotal,
      disablePageTitle: true,
      sizePerPageList: [
        {
          text: "5",
          value: 5,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "All",
          value: props.users.length,
        },
      ], // A numeric array is also available. the purpose of above example is custom the text
    };

    return (
      <Card>
        <Card.Body>
          <Card.Header
            className="mb-2"
            style={{ backgroundColor: "#b23cfd", color: "white", fontSize: 20 }}
          >
            DATA
          </Card.Header>
          <ToolkitProvider
            headerWrapperClasses="foo"
            keyField="id"
            data={props.users}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <Row>
                  <Col>
                    <div style={{ float: "left" }}>
                      <Link to="/create">
                        <Button id="tambah" style={{ marginRight: 5 }}>
                          <FontAwesomeIcon icon={faPlus} /> Tambah Data
                        </Button>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ float: "right" }}>
                      <SearchBar {...props.searchProps} />
                    </div>
                  </Col>
                </Row>

                <BootstrapTable
                  style={{ float: "right" }}
                  {...props.baseProps}
                  pagination={paginationFactory(options)}
                />
              </div>
            )}
          </ToolkitProvider>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <div style={{ textAlign: "center", color: "#b23cfd" }}>
        <Spinner animation="border" />
      </div>
    );
  }
};

export default connect(mapStateToProps, null)(TableComponent);
