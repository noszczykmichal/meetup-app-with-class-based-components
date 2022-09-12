/* eslint-disable react/static-property-placement */
import PropTypes from "prop-types";
import { Component } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

class MeetupItem extends Component {
  static contextType = FavoritesContext;

  render() {
    const { meetupData } = this.props;
    const { itemIsFavorite, addFavorite, removeFavorite } = this.context;
    const isFavorite = itemIsFavorite(meetupData.id);
    const toggleFavStatusHandler = () => {
      if (isFavorite === false) {
        return addFavorite(meetupData);
      }
      return removeFavorite(meetupData.id);
    };

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
              {isFavorite ? "Remove from Favorites" : "To Favorites"}
            </button>
          </div>
        </Card>
      </li>
    );
  }
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
