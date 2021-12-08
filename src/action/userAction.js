import axios from "axios";
export const GET_USER = "GET_USER";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const POST_USER = "POST_USER";
export const EDIT_USER = "EDIT_USER";
export function userAction() {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/dataUser`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_USER,
          payload: {
            data: res.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USER,
          payload: {
            data: false,
            error: err.message,
          },
        });
        console.log(err);
      });
  };
}
export function userById(id) {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/dataUser/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_USER_BY_ID,
          payload: {
            data: res.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_BY_ID,
          payload: {
            data: false,
            error: err.message,
          },
        });
        console.log(err);
      });
  };
}
export function postData(data) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/dataUser/`, data)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: POST_USER,
          payload: {
            data: res.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_USER,
          payload: {
            data: false,
            error: err.message,
          },
        });
        console.log(err);
      });
  };
}
export function editData(id, data) {
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/dataUser/${id}`, data)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: EDIT_USER,
          payload: {
            data: res.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: EDIT_USER,
          payload: {
            data: false,
            error: err.message,
          },
        });
        console.log(err);
      });
  };
}
export function deleteData(id) {
  return () => {
    axios
      .delete(`http://localhost:5000/dataUser/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function emptyData() {
  return (dispatch) => {
    dispatch({
      type: GET_USER_BY_ID,
      payload: {
        data: false,
        error: false,
      },
    });
    dispatch({
      type: POST_USER,
      payload: {
        data: false,
        error: false,
      },
    });
  };
}
