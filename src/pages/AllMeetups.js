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

  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

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

  // useEffect(() => {
  // setIsLoading(true);
  // fetch("https://meetup-app-ca8e7-default-rtdb.firebaseio.com/meetups.json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const fetchedMeetups = [];

  //     Object.keys(data).forEach((meetup) =>
  //       fetchedMeetups.push({
  //         id: meetup,
  //         ...data[meetup],
  //       }),
  //     );
  //     setIsLoading(false);
  //     setLoadedMeetups(fetchedMeetups);
  //   });
  // }, []);

  render() {
    let currContent;

    if (this.state.isLoading) {
      currContent = <Spinner />;
    } else {
      currContent = <MeetupList meetups={this.state.loadedMeetups} />;
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
