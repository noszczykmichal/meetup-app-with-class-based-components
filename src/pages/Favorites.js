/* eslint-disable react/static-property-placement */
import { Component } from "react";
import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

class FavoritesPage extends Component {
  static contextType = FavoritesContext;

  render() {
    const { totalFavorites, favorites } = this.context;
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

export default FavoritesPage;
