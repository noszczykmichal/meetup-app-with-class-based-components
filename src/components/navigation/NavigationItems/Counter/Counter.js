import { useContext } from "react";

import classes from "./Counter.module.css";
import FavoritesContext from "../../../../store/favorites-context";

function Counter() {
  const { totalFavorites } = useContext(FavoritesContext);

  return (
    <div className={classes.counter}>
      <p>{totalFavorites}</p>
    </div>
  );
}

export default Counter;
