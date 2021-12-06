import axios from "axios";
export const GET_USER = "GET_USER";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
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
export function emptyData() {
  return (dispatch) => {
    dispatch({
      type: GET_USER_BY_ID,
      payload: {
        data: false,
        error: false,
      },
    });
  };
}
