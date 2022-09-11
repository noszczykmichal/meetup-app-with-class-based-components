import PropTypes from "prop-types";

import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetupData={meetup} id={meetup.id} />
      ))}
    </ul>
  );
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
