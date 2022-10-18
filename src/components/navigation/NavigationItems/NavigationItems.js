/* eslint-disable react/prefer-stateless-function */
import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Counter from "./Counter/Counter";
import TrashIcon from "../../ui/TrashIcon";

class NavigationItems extends Component {
  render() {
    const { totalFavorites } = this.props;
    return (
      <ul className={classes["navigation-items"]}>
        <NavigationItem linkTo="/">All Meetups</NavigationItem>
        <NavigationItem linkTo="/new-meetup">Add New Meetup</NavigationItem>
        <div className={classes["navigation-items__badges"]}>
          <NavigationItem linkTo="/favorites">My Favorites</NavigationItem>
          <Counter totalFavorites={totalFavorites} />
          <TrashIcon totalFavorites={totalFavorites} />
        </div>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalFavorites: state.meetups.totalFavorites,
  };
};

NavigationItems.propTypes = {
  totalFavorites: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(NavigationItems);
