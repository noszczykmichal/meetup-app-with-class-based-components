/* eslint-disable react/prefer-stateless-function */
import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import UIContext from "../../store_context/uiContext";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar";
import Backdrop from "../ui/Backdrop";
import MobileNavigation from "../navigation/MobileNavigation";
import Modal from "../ui/Modal";

class Layout extends Component {
  render() {
    const { clearAllFavs, children } = this.props;
    const { hideAllModals } = this.context;

    const confirmButtonHandler = () => {
      hideAllModals();
      clearAllFavs();
    };
    return (
      <>
        <Backdrop />
        <Toolbar />
        <MobileNavigation />
        <Modal onConfirmButtonClick={confirmButtonHandler} />
        <main className={classes.main}>{children}</main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearAllFavs: () =>
      dispatch({
        type: "meetupSlice/clearAllFavorites",
      }),
  };
};

Layout.contextType = UIContext;

Layout.propTypes = {
  clearAllFavs: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default connect(null, mapDispatchToProps)(Layout);
