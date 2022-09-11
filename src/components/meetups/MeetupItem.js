import { useContext } from "react";
import PropTypes from "prop-types";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem({ meetupData }) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(meetupData.id);

  function toggleFavStatusHandler() {
    if (itemIsFavorite === false) {
      return favoritesCtx.addFavorite(meetupData);
    }
    return favoritesCtx.removeFavorite(meetupData.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetupData.image} alt={meetupData.description} />
        </div>
        <div className={classes.content}>
          <h3>{meetupData.title}</h3>
          <address>{meetupData.address}</address>
          <p>{meetupData.description}</p>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={toggleFavStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

MeetupItem.propTypes = {
  meetupData: PropTypes.shape({
    id: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MeetupItem;
