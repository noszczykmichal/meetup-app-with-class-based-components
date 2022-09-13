import PropTypes from "prop-types";
import { Component } from "react";

import classes from "./Card.module.css";

class Card extends Component {
  render() {
    const { children } = this.props;
    return <div className={classes.card}>{children}</div>;
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
