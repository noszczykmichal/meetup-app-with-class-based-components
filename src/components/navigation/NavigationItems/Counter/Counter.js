import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

function Counter() {
  const totalFavorites = useSelector((state) => state.meetups.totalFavorites);

  return (
    <div className={classes.counter}>
      <p>{totalFavorites}</p>
    </div>
  );
}

export default Counter;
