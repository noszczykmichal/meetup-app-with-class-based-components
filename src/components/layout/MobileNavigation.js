import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MobileNavigation.module.css";
import TrashIcon from "../ui/TrashIcon";

function MobileNavigation({ show, linkClicked, trashIconClicked }) {
  const favoritesCtx = useContext(FavoritesContext);
  let attachedClasses = [classes["mobile-navbar"]];
  if (show) {
    attachedClasses = [
      classes["mobile-navbar"],
      classes["mobile-navbar--active"],
    ];
  }

  return (
    <nav className={attachedClasses.join(" ")}>
      <ul className={classes["mobile-navbar__items"]}>
        <li className={classes["mobile-navbar__item"]}>
          <Link to="/" onClick={linkClicked}>
            All Meetups
          </Link>
        </li>
        <li className={classes["mobile-navbar__item"]}>
          <Link to="/new-meetup" onClick={linkClicked}>
            Add New Meetup
          </Link>
        </li>
        <li className={classes["mobile-navbar__item"]}>
          <Link to="/favorites" onClick={linkClicked}>
            My Favorites
          </Link>
          <div className={classes["mobile-navbar__item--badge"]}>
            <p>{favoritesCtx.totalFavorites}</p>
          </div>
          <TrashIcon clicked={trashIconClicked} />
        </li>
      </ul>
    </nav>
  );
}

MobileNavigation.propTypes = {
  show: PropTypes.bool.isRequired,
  linkClicked: PropTypes.func.isRequired,
  trashIconClicked: PropTypes.func.isRequired,
};

export default MobileNavigation;
