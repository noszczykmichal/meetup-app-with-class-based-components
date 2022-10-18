import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

class NewMeetupForm extends Component {
  constructor(props) {
    super(props);
    this.titleInputRef = React.createRef();
    this.imageInputRef = React.createRef();
    this.addressInputRef = React.createRef();
    this.descriptionInputRef = React.createRef();
  }

  render() {
    const { onAddMeetup } = this.props;

    const submitHandler = (event) => {
      event.preventDefault();
      const enteredTitle = this.titleInputRef.current.value;
      const enteredImage = this.imageInputRef.current.value;
      const enteredAddress = this.addressInputRef.current.value;
      const enteredDescription = this.descriptionInputRef.current.value;

      const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
      };

      onAddMeetup(meetupData);
    };

    return (
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">
              Meetup Title
              <input type="text" required id="title" ref={this.titleInputRef} />
            </label>
          </div>
          <div className={classes.control}>
            <label htmlFor="image">
              Meetup Image
              <input type="url" required id="image" ref={this.imageInputRef} />
            </label>
          </div>
          <div className={classes.control}>
            <label htmlFor="address">
              Address
              <input
                type="text"
                required
                id="address"
                ref={this.addressInputRef}
              />
            </label>
          </div>
          <div className={classes.control}>
            <label htmlFor="description">
              Description
              <textarea
                id="description"
                rows="5"
                ref={this.descriptionInputRef}
              />
            </label>
          </div>
          <div className={classes.actions}>
            <button type="submit">Add Meetup</button>
          </div>
        </form>
      </Card>
    );
  }
}

NewMeetupForm.propTypes = {
  onAddMeetup: PropTypes.func.isRequired,
};

export default NewMeetupForm;
