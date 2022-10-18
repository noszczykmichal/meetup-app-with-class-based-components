import { useSelector } from "react-redux";

import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const { favorites, totalFavorites } = useSelector((state) => state.meetups);

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

export default FavoritesPage;
