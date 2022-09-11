import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";
import Spinner from "../components/ui/Spinner";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
        setLoadedMeetups(fetchedMeetups);
      });
  }, []);

  let currContent;

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

export default AllMeetupsPage;
