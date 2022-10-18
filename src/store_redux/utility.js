export const itemIsFavoriteHandler = (favorites, searchedId) => {
  const userFavorites = [...favorites];
  return userFavorites.some((meetup) => meetup.id === searchedId);
};

export default itemIsFavoriteHandler;
