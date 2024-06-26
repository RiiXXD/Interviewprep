import {
  SIGN_SUCCESS,
  SIGN_REQUEST,
  SIGN_ERROR,
  LOGIN_FAILURE,
  EDIT_SUCCESSFUL,
  EDIT_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
} from "./action-type";

const intitState = {
  isLoading: false,
  checkAuth: false,
  user: {},
  loggedInUsers: [],
  isError: false,
  msg: "",

  loginMsg: "",
  isRegistered: false,
  token: "",
  isLogout: false,
};
export const reducer = (state = intitState, { type, payload }) => {
  switch (type) {
    case SIGN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        checkAuth: false,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};
