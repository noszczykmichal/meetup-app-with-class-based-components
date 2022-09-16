import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  return (
    <section>
      <h1>My Favorites</h1>
      <FavoritesContext.Consumer>
        {(context) =>
          context.totalFavorites ? (
            <MeetupList meetups={context.favorites} />
          ) : (
            <p>You got no favorites.</p>
          )
        }
      </FavoritesContext.Consumer>
    </section>
  );
}

export default FavoritesPage;
