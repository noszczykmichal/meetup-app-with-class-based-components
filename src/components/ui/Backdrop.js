/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { Component } from "react";

import classes from "./Backdrop.module.css";

class Backdrop extends Component {
  render() {
    const { show, clicked } = this.props;
    return (
      <CSSTransition
        in={show}
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
        <div className={classes.backdrop} onClick={clicked} />
      </CSSTransition>
    );
  }
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Backdrop;
