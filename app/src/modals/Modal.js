import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../state/modal/actions";

function Modal(props) {
  return (
    <div className="modal is-active">
      <div onClick={props.closeModal} className="modal-background"></div>
      <div className="modal-content">
        {props.children}
      </div>
      <button onClick={props.closeModal} className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    closeModal(){
      dispatch(closeModal())
    }
  }
}

export default connect(null, mapDispatchToProps)(Modal);
