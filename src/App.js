/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
import React, { Suspense, Component } from "react";
import { Route, Routes } from "react-router-dom";
import FavoritesContext from "./store/favorites-context";

import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import Spinner from "./components/ui/Spinner";

const NewMeetupPage = React.lazy(() => import("./pages/NewMeetup"));
const FavoritesPage = React.lazy(() => import("./pages/Favorites"));

class App extends Component {
  constructor() {
    super();
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
    return this.state.userFavorites.some((meetup) => meetup.id === meetupId);
  }

  clearFavoriteHandler() {
    this.setState({ userFavorites: [] });
  }

  render() {
    return (
      <Layout>
        <FavoritesContext.Provider
          value={{
            favorites: this.state.userFavorites,
            totalFavorites: this.state.userFavorites.length,
            addFavorite: this.addFavoriteHandler.bind(this),
            removeFavorite: this.removeFavoriteHandler.bind(this),
            itemIsFavorite: this.itemIsFavoriteHandler.bind(this),
            clearFavorite: this.clearFavoriteHandler,
          }}
        >
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" exact element={<AllMeetupsPage />} />
              <Route path="/new-meetup" element={<NewMeetupPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Suspense>
        </FavoritesContext.Provider>
      </Layout>
    );
  }
}

export default App;

// export function FavoritesContextProvider({ children }) {
//   const [userFavorites, setUserFavorites] = useState([]);

//   const addFavoriteHandler = (favoriteMeetup) => {
//     setUserFavorites((prevUserFavorites) =>
//       prevUserFavorites.concat(favoriteMeetup),
//     );
//   };

//   const removeFavoriteHandler = (meetupId) => {
//     setUserFavorites((prevUserFavorites) =>
//       prevUserFavorites.filter((meetup) => meetup.id !== meetupId),
//     );
//   };

//   const itemIsFavoriteHandler = (meetupId) => {
//     return userFavorites.some((meetup) => meetup.id === meetupId);
//   };

//   const clearFavoriteHandler = () => {
//     setUserFavorites([]);
//   };

//   const context = {
//     favorites: userFavorites,
//     totalFavorites: userFavorites.length,
//     addFavorite: addFavoriteHandler,
//     removeFavorite: removeFavoriteHandler,
//     itemIsFavorite: itemIsFavoriteHandler,
//     clearFavorite: clearFavoriteHandler,
//   };

//   return (
//     <FavoritesContext.Provider value={context}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// }

// FavoritesContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default FavoritesContext;
