import { handleActions } from "redux-actions";
import { increaseCount, decreaseCount } from "./actions";

const countReducer = handleActions({
  [increaseCount]: (state, action) => action.payload,
  [decreaseCount]: (state, action) => null
}, 0);

export default countReducer;
