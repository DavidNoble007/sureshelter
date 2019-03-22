import { handleActions } from "redux-actions";
import { 
  signinReq,
  logoutReq,
  updateAuth,
} from "./actions";

const defaultState = {
  authenticated: false,
  token: "",
  error: "",
  user: {}
}

const authReducer = handleActions({
  [signinReq]: (state, action) => {
    return {
      ...state, 
      user: action.payload.user, 
      authenticated: true,
      token: action.payload.token
    }
  },
  [updateAuth]: (state, action) => action.payload,
  [logoutReq]: (state, action) => defaultState
}, defaultState);

export default authReducer;
