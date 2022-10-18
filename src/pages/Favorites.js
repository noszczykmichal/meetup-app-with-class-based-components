/* eslint-disable react/prefer-stateless-function */
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";

import MeetupList from "../components/meetups/MeetupList";

class FavoritesPage extends Component {
  render() {
    const { favorites, totalFavorites } = this.props;
    return (
      <section>
        <h1>My Favorites</h1>
        {totalFavorites ? (
          <MeetupList meetups={favorites} />
        ) : (
          <p>You got no favorites.</p>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.meetups.favorites,
    totalFavorites: state.meetups.totalFavorites,
  };
};

FavoritesPage.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      address: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  totalFavorites: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(FavoritesPage);
