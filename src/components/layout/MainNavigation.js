/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MainNavigation.module.css";
import TrashIcon from "../ui/TrashIcon";

function MainNavigation({ toggleClicked, trashIconClicked }) {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <div className={classes.mobilenav_toggle} onClick={toggleClicked}>
        <div />
        <div />
        <div />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
            <div className={classes.badge}>
              <p>{favoritesCtx.totalFavorites}</p>
            </div>
            <TrashIcon clicked={trashIconClicked} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

MainNavigation.propTypes = {
  toggleClicked: PropTypes.func.isRequired,
  trashIconClicked: PropTypes.func.isRequired,
};

export default MainNavigation;
