import { GET_USER, GET_USER_BY_ID } from "../action/userAction";

let initialState = {
  nama: "beni",
  dataUser: false,
  dataUserById: false,
  error: false,
};

export default function user(state = initialState, action) {
  if (action.type === GET_USER) {
    return {
      ...state,
      dataUser: action.payload.data,
      error: action.payload.error,
    };
  } else if (action.type === GET_USER_BY_ID) {
    return {
      ...state,
      dataUser: action.payload.data,
      error: action.payload.error,
    };
  } else {
    return state;
  }
}
