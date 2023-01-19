import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById('overlays')
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  );
};

export default Modal;
