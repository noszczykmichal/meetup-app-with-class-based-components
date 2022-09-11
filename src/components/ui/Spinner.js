import classes from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={classes.spinner}>
      <div className={classes.loader}>Loading...</div>
    </div>
  );
}

export default Spinner;
