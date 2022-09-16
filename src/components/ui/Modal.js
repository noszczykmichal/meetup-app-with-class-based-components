import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import classes from "./Modal.module.css";

function Modal({ show, confirmButtonHandler, cancelButtonHandler }) {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames={{
        enter: "",
        enterActive: classes["modal--open"],
        exit: "",
        exitActive: classes["modal--closed"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.modal}>
        <div className={classes.modal__text}>
          <p>This will delete all your favorite meetups!</p>
          <p>Do you want to continue?</p>
        </div>
        <div className={classes.modal__actions}>
          <button
            type="button"
            className={[
              classes.modal__action,
              classes["modal__action--confirm"],
            ].join(" ")}
            onClick={confirmButtonHandler}
          >
            YES
          </button>
          <button
            type="button"
            className={[
              classes.modal__action,
              classes["modal__action--cancel"],
            ].join(" ")}
            onClick={cancelButtonHandler}
          >
            NO
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  confirmButtonHandler: PropTypes.func.isRequired,
  cancelButtonHandler: PropTypes.func.isRequired,
};

export default Modal;
