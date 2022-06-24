import { createPortal } from "react-dom";
import React, { Fragment } from "react";
import styles from "./Modal.module.css";

export default function Modal(props) {
  const Backdrop = () => {
    return <div className={styles.backdrop} />;
  };
  const Modal = () => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  };

  const overlayId = document.getElementById("overlay");

  return (
    <Fragment>
      {createPortal(<Backdrop />, overlayId)}
      {createPortal(<Modal>{props.children}</Modal>, overlayId)}
    </Fragment>
  );
}
