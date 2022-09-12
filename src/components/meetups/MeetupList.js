import PropTypes from "prop-types";
import { Component } from "react";

import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

class MeetupList extends Component {
  render() {
    const { meetups } = this.props;
    return (
      <ul className={classes.list}>
        {meetups.map((meetup) => (
          <MeetupItem key={meetup.id} meetupData={meetup} id={meetup.id} />
        ))}
      </ul>
    );
  }
}

MeetupList.propTypes = {
  meetups: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default MeetupList;
