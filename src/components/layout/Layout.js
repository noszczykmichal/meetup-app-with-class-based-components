import { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar";
import Backdrop from "../ui/Backdrop";
import MobileNavigation from "../navigation/MobileNavigation";
import Modal from "../ui/Modal";
import FavoritesContext from "../../store/favorites-context";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.hideComponentsHandler = this.hideComponentsHandler.bind(this);
    this.navbarHandler = this.navbarHandler.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
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

  render() {
    const { clearFavorite } = this.context;
    const { children } = this.props;
    const { backdropVisible, mobileNavbarVisible, modalVisible } = this.state;
    const clearHandler = () => {
      clearFavorite();
      this.hideComponentsHandler();
    };
    return (
      <>
        <Backdrop clicked={this.hideComponentsHandler} show={backdropVisible} />
        <Toolbar
          toggleClicked={this.navbarHandler}
          trashIconClicked={this.modalHandler}
          linkClicked={this.hideComponentsHandler}
        />
        <MobileNavigation
          linkClicked={this.hideComponentsHandler}
          show={mobileNavbarVisible}
          trashIconClicked={this.modalHandler}
        />
        <Modal
          show={modalVisible}
          // eslint-disable-next-line react/jsx-no-bind
          confirmButtonHandler={clearHandler.bind(this)}
          cancelButtonHandler={this.hideComponentsHandler}
        />
        <main className={classes.main}>{children}</main>
      </>
    );
  }
}

Layout.contextType = FavoritesContext;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
