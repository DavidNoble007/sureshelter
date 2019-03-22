import { handleActions } from "redux-actions";
import { changeModal, closeModal } from "./actions";

const modalReducer = handleActions({
  [changeModal]: (state, action) => action.payload,
  [closeModal]: (state, action) => null
}, null);

export default modalReducer;
