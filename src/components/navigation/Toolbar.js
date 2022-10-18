/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classes from "./Toolbar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import UIContext from "../../store_context/uiContext";

function Toolbar() {
  return (
    <UIContext.Consumer>
      {(context) => (
        <header className={classes.header}>
          <div className={classes.logo}>React Meetups</div>
          <div className={classes.toggle} onClick={context.navbarToggler}>
            <div />
            <div />
            <div />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </header>
      )}
    </UIContext.Consumer>
  );
}

export default Toolbar;
