/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CSSTransition } from "react-transition-group";

import UIContext from "../../store_context/uiContext";
import classes from "./Backdrop.module.css";

function Backdrop() {
  return (
    <UIContext.Consumer>
      {(context) => (
        <CSSTransition
          in={context.backdropOpen}
          timeout={300}
          classNames={{
            enter: "",
            enterActive: classes["backdrop--open"],
            exit: "",
            exitActive: classes["backdrop--closed"],
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.backdrop} onClick={context.hideAllModals} />
        </CSSTransition>
      )}
    </UIContext.Consumer>
  );
}

export default Backdrop;
