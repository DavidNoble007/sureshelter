import { createAction } from "redux-actions";
import API from "../../utils/API";
import { closeModal } from "../modal/actions";

export const signinReq = createAction("SIGNIN_REQ");
export const logoutReq = createAction("LOGOUT_REQ");
export const signinRes = createAction("SIGNIN_REQ");
export const logoutRes = createAction("LOGOUT_REQ");
export const updateAuth = createAction("UPDATE_AUTH");

export function signin(email, password) {
  return function(dispatch) {
    return API.signIn(email, password)
      .then(res => {
        const auth = { ...res.data };
        auth.authenticated = true;
        dispatch(updateAuth(auth));
        dispatch(closeModal());
      })
      .catch(err => console.log(err));
  };
}

export function signup(email, password) {
  return function(dispatch) {
    return API.signUp(email, password)
      .then(res => {
        const auth = { ...res.data };
        auth.authenticated = true;
        dispatch(updateAuth(auth));
        dispatch(closeModal());
      })
      .catch(err => console.log(err));
  };
}
