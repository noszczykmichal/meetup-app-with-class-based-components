import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import UIContext from "../../store_context/uiContext";
import classes from "./Modal.module.css";

function Modal({ onConfirmButtonClick }) {
  return (
    <UIContext.Consumer>
      {(context) => (
        <CSSTransition
          in={context.modalOpen}
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
                onClick={onConfirmButtonClick}
              >
                YES
              </button>
              <button
                type="button"
                className={[
                  classes.modal__action,
                  classes["modal__action--cancel"],
                ].join(" ")}
                onClick={context.hideAllModals}
              >
                NO
              </button>
            </div>
          </div>
        </CSSTransition>
      )}
    </UIContext.Consumer>
  );
}

Modal.propTypes = {
  onConfirmButtonClick: PropTypes.func.isRequired,
};

export default Modal;
