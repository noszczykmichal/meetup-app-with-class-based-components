import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { itemIsFavoriteHandler } from "../../store/utility";

class MeetupItem extends Component {
  render() {
    const { meetupData, favorites, addFavorite, removeFavorite } = this.props;
    const isFavorite = itemIsFavoriteHandler(favorites, meetupData.id);

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

const mapStateToProps = (state) => {
  return {
    favorites: state.meetups.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (meetupData) =>
      dispatch({
        type: "meetupSlice/addMeetupToFavorites",
        payload: meetupData,
      }),
    removeFavorite: (meetupId) =>
      dispatch({
        type: "meetupSlice/removeMeetupFromFavorites",
        payload: meetupId,
      }),
  };
};

MeetupItem.propTypes = {
  meetupData: PropTypes.shape({
    id: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      address: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetupItem);
