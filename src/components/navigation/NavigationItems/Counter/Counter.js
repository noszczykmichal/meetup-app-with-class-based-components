import PropTypes from "prop-types";

import classes from "./Counter.module.css";

function Counter({ totalFavorites }) {
  return (
    <div className={classes.counter}>
      <p>{totalFavorites}</p>
    </div>
  );
}

Counter.propTypes = {
  totalFavorites: PropTypes.number.isRequired,
};

export default Counter;
