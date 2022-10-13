import PropTypes from "prop-types";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Counter from "./Counter/Counter";
import TrashIcon from "../../ui/TrashIcon";

function NavigationItems({ onTrashIconClick, onLinkClick }) {
  return (
    <ul className={classes["navigation-items"]}>
      <NavigationItem linkTo="/" onClick={onLinkClick}>
        All Meetups
      </NavigationItem>
      <NavigationItem linkTo="/new-meetup" onClick={onLinkClick}>
        Add New Meetup
      </NavigationItem>
      <div className={classes["navigation-items__badges"]}>
        <NavigationItem linkTo="/favorites" onClick={onLinkClick}>
          My Favorites
        </NavigationItem>
        <Counter />
        <TrashIcon clicked={onTrashIconClick} />
      </div>
    </ul>
  );
}

NavigationItems.propTypes = {
  onTrashIconClick: PropTypes.func.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default NavigationItems;
