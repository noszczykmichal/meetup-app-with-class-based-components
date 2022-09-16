/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { Component, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (_favoriteMeetup) => {},
  removeFavorite: (_meetupId) => {},
  itemIsFavorite: (_meetupId) => {},
  clearFavorite: () => {},
});

export class FavoritesContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFavorites: [],
    };
  }

  addFavoriteHandler(favoriteMeetup) {
    this.setState((prevUserFavorites) => ({
      userFavorites: prevUserFavorites.userFavorites.concat(favoriteMeetup),
    }));
  }

  removeFavoriteHandler(meetupId) {
    this.setState((prevUserFavorites) => ({
      userFavorites: prevUserFavorites.userFavorites.filter(
        (meetup) => meetup.id !== meetupId,
      ),
    }));
  }

  itemIsFavoriteHandler(meetupId) {
    const { userFavorites } = this.state;
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  clearFavoriteHandler() {
    return this.setState({ userFavorites: [] });
  }

  render() {
    const { userFavorites } = this.state;
    const { children } = this.props;
    return (
      <FavoritesContext.Provider
        value={{
          favorites: userFavorites,
          totalFavorites: userFavorites.length,
          addFavorite: this.addFavoriteHandler.bind(this),
          removeFavorite: this.removeFavoriteHandler.bind(this),
          itemIsFavorite: this.itemIsFavoriteHandler.bind(this),
          clearFavorite: this.clearFavoriteHandler.bind(this),
        }}
      >
        {children}
      </FavoritesContext.Provider>
    );
  }
}

FavoritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavoritesContext;
