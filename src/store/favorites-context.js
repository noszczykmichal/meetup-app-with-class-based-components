/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (_favoriteMeetup) => {},
  removeFavorite: (_meetupId) => {},
  itemIsFavorite: (_meetupId) => {},
  clearFavorite: () => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup),
    );
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId),
    );
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const clearFavoriteHandler = () => {
    setUserFavorites([]);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
    clearFavorite: clearFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavoritesContext;
