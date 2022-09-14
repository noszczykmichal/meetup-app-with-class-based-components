import { Component } from "react";

import MeetupList from "../components/meetups/MeetupList";
import Spinner from "../components/ui/Spinner";

class AllMeetupsPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      loadedMeetups: [],
    };
  }

  componentDidMount() {
    this.setIsLoading(true);
    fetch("https://meetup-app-ca8e7-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const fetchedMeetups = [];

        Object.keys(data).forEach((meetup) =>
          fetchedMeetups.push({
            id: meetup,
            ...data[meetup],
          }),
        );
        this.setIsLoading(false);
        this.setLoadedMeetups(fetchedMeetups);
      });
  }

  setIsLoading(bool) {
    this.setState({ isLoading: bool });
  }

  setLoadedMeetups(arrOfMeetups) {
    this.setState({ loadedMeetups: arrOfMeetups });
  }

  render() {
    let currContent;
    const { isLoading, loadedMeetups } = this.state;

    if (isLoading) {
      currContent = <Spinner />;
    } else {
      currContent = <MeetupList meetups={loadedMeetups} />;
    }

    return (
      <section>
        <h1>All Meetups Page</h1>
        {currContent}
      </section>
    );
  }
}

export default AllMeetupsPage;
