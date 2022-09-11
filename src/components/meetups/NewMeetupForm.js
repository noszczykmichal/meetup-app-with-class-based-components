import { useRef } from "react";
import PropTypes from "prop-types";

import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

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
      <form action="" className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">
            Meetup Title
            <input type="text" required id="title" ref={titleInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">
            Meetup Image
            <input type="url" required id="image" ref={imageInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">
            Address
            <input type="text" required id="address" ref={addressInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">
            Description
            <textarea id="description" rows="5" ref={descriptionInputRef} />
          </label>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

NewMeetupForm.propTypes = {
  onAddMeetup: PropTypes.func.isRequired,
};

export default NewMeetupForm;
