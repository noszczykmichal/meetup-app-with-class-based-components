/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */

import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (_favoriteMeetup) => {},
  removeFavorite: (_meetupId) => {},
  itemIsFavorite: (_meetupId) => {},
  clearFavorite: () => {},
});

export default FavoritesContext;
