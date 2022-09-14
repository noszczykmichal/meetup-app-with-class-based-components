/* eslint-disable react/jsx-no-bind */
import PropTypes from "prop-types";
import { Component } from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

class NewMeetupPage extends Component {
  addMeetupHandler(meetupData) {
    const { navigate } = this.props;

    fetch("https://meetup-app-ca8e7-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/"));
  }

  render() {
    return (
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={this.addMeetupHandler.bind(this)} />
      </section>
    );
  }
}

NewMeetupPage.propTypes = {
  navigate: PropTypes.func.isRequired,
};

function NewMeetupPageWithNavigate() {
  const navigate = useNavigate();
  return <NewMeetupPage navigate={navigate} />;
}

export default NewMeetupPageWithNavigate;
