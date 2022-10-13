/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";

import classes from "./Toolbar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

function Toolbar({ toggleClicked, trashIconClicked, linkClicked }) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <div className={classes.toggle} onClick={toggleClicked}>
        <div />
        <div />
        <div />
      </div>
      <nav>
        <NavigationItems
          onTrashIconClick={trashIconClicked}
          onLinkClick={linkClicked}
        />
      </nav>
    </header>
  );
}

Toolbar.propTypes = {
  toggleClicked: PropTypes.func.isRequired,
  trashIconClicked: PropTypes.func.isRequired,
  linkClicked: PropTypes.func.isRequired,
};

export default Toolbar;
