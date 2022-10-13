import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.css";

function NavigationItem({ linkTo, children, onClick }) {
  return (
    <li className={classes["navigation-item"]}>
      <Link to={linkTo} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}

NavigationItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavigationItem;
