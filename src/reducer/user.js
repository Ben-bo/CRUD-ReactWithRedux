import {
  GET_USER,
  GET_USER_BY_ID,
  POST_USER,
  EDIT_USER,
} from "../action/userAction";

let initialState = {
  nama: "beni",
  dataUser: false,
  dataUserById: false,
  resDataUser: false,
  errorResData: false,
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
  } else if (action.type === POST_USER) {
    return {
      ...state,
      resDataUser: action.payload.data,
      errorResData: action.payload.error,
    };
  } else if (action.type === EDIT_USER) {
    return {
      ...state,
      resDataUser: action.payload.data,
      errorResData: action.payload.error,
    };
  } else {
    return state;
  }
}
