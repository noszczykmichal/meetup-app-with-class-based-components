import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import classes from "./MobileNavigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

function MobileNavigation({ show, linkClicked, trashIconClicked }) {
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames={{
        enter: "",
        enterActive: classes["mobile-navbar--open"],
        exit: "",
        exitActive: classes["mobile-navbar--closed"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <nav className={classes["mobile-navbar"]}>
        <NavigationItems
          onLinkClick={linkClicked}
          onTrashIconClick={trashIconClicked}
        />
      </nav>
    </CSSTransition>
  );
}

MobileNavigation.propTypes = {
  show: PropTypes.bool.isRequired,
  linkClicked: PropTypes.func.isRequired,
  trashIconClicked: PropTypes.func.isRequired,
};

export default MobileNavigation;
