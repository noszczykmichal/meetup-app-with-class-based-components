import { useState, useContext } from "react";
import PropTypes from "prop-types";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Backdrop from "../ui/Backdrop";
import MobileNavigation from "./MobileNavigation";
import Modal from "../ui/Modal";
import FavoritesContext from "../../store/favorites-context";

function Layout({ children }) {
  const [backdropVisible, toggleBackdrop] = useState(false);
  const [mobileNavbarVisible, toggleNavbar] = useState(false);
  const [modalVisible, toggleModal] = useState(false);
  const favoriteCtx = useContext(FavoritesContext);

  const hideComponentsHandler = () => {
    toggleBackdrop(false);
    toggleModal(false);
    toggleNavbar(false);
  };

  const navbarHandler = () => {
    toggleNavbar((prevState) => !prevState);
    toggleBackdrop((prevState) => !prevState);
  };

  const modalHandler = () => {
    toggleModal(true);
    toggleBackdrop(true);
    toggleNavbar(false);
  };

  const clearHandler = () => {
    favoriteCtx.clearFavorite();
    hideComponentsHandler();
  };

  return (
    <div>
      <Backdrop clicked={hideComponentsHandler} show={backdropVisible} />
      <MainNavigation
        toggleClicked={navbarHandler}
        trashIconClicked={modalHandler}
      />
      <MobileNavigation
        linkClicked={navbarHandler}
        show={mobileNavbarVisible}
        trashIconClicked={modalHandler}
      />
      <Modal
        show={modalVisible}
        confirmButtonHandler={clearHandler}
        cancelButtonHandler={hideComponentsHandler}
      />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
