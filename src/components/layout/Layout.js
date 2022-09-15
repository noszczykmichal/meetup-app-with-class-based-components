/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/static-property-placement */
import { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Backdrop from "../ui/Backdrop";
import MobileNavigation from "./MobileNavigation";
import Modal from "../ui/Modal";
import FavoritesContext from "../../store/favorites-context";

class Layout extends Component {
  static contextType = FavoritesContext;

  constructor(props) {
    super(props);
    this.state = {
      backdropVisible: false,
      mobileNavbarVisible: false,
      modalVisible: false,
    };
  }

  hideComponentsHandler() {
    this.setState({
      backdropVisible: false,
      mobileNavbarVisible: false,
      modalVisible: false,
    });
  }

  navbarHandler() {
    this.setState((prevState) => ({
      backdropVisible: !prevState.backdropVisible,
      mobileNavbarVisible: !prevState.mobileNavbarVisible,
    }));
  }

  modalHandler() {
    this.setState({
      backdropVisible: true,
      mobileNavbarVisible: false,
      modalVisible: true,
    });
  }

  // clearHandler() {
  //   const { clearFavorite } = this.context;
  //   clearFavorite();
  //   this.hideComponentsHandler();
  // }

  render() {
    const { clearFavorite } = this.context;
    const { children } = this.props;
    const { backdropVisible, mobileNavbarVisible, modalVisible } = this.state;
    // const clearHandler = (name) => {
    //   const { clearFavorite } = this.context;
    //   console.log(this.context);
    //   return clearFavorite(name);
    // };
    return (
      <div>
        <Backdrop
          clicked={this.hideComponentsHandler.bind(this)}
          show={backdropVisible}
        />
        <MainNavigation
          toggleClicked={this.navbarHandler.bind(this)}
          trashIconClicked={this.modalHandler.bind(this)}
        />
        <MobileNavigation
          linkClicked={this.navbarHandler.bind(this)}
          show={mobileNavbarVisible}
          trashIconClicked={this.modalHandler.bind(this)}
        />
        <Modal
          show={modalVisible}
          confirmButtonHandler={clearFavorite.bind(this)}
          cancelButtonHandler={this.hideComponentsHandler.bind(this)}
        />
        <main className={classes.main}>{children}</main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
