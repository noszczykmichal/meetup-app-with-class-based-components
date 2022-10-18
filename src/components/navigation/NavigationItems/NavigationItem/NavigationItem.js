import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import UIContext from "../../../../store_context/uiContext";

function NavigationItem({ linkTo, children }) {
  return (
    <UIContext.Consumer>
      {(context) => (
        <li className={classes["navigation-item"]}>
          <Link to={linkTo} onClick={context.hideAllModals}>
            {children}
          </Link>
        </li>
      )}
    </UIContext.Consumer>
  );
}

NavigationItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
