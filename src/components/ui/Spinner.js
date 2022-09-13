import { Component } from "react";
import classes from "./Spinner.module.css";

class Spinner extends Component {
  render() {
    return (
      <div className={classes.spinner}>
        <div className={classes.loader}>Loading...</div>
      </div>
    );
  }
}

export default Spinner;
