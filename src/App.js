/* eslint-disable react/jsx-no-constructed-context-values */
import React, { Suspense, Component } from "react";
import { Route, Routes } from "react-router-dom";
import FavoritesContext from "./store/favorites-context";

import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import Spinner from "./components/ui/Spinner";

const NewMeetupPage = React.lazy(() => import("./pages/NewMeetup"));
const FavoritesPage = React.lazy(() => import("./pages/Favorites"));

class App extends Component {
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
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" exact element={<AllMeetupsPage />} />
              <Route path="/new-meetup" element={<NewMeetupPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </FavoritesContext.Provider>
    );
  }
}

export default App;
