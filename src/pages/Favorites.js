import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites ? (
        <MeetupList meetups={favoritesCtx.favorites} />
      ) : (
        <p>You got no favorites.</p>
      )}
    </section>
  );
}

export default FavoritesPage;
