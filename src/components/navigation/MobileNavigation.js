import { CSSTransition } from "react-transition-group";

import classes from "./MobileNavigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import UIContext from "../../store_context/uiContext";

function MobileNavigation() {
  return (
    <UIContext.Consumer>
      {(context) => (
        <CSSTransition
          in={context.mobileNavbarOpen}
          timeout={500}
          classNames={{
            enter: "",
            enterActive: classes["mobile-navbar--open"],
            exit: "",
            exitActive: classes["mobile-navbar--closed"],
          }}
          mountOnEnter
          unmountOnExit
        >
          <nav className={classes["mobile-navbar"]}>
            <NavigationItems />
          </nav>
        </CSSTransition>
      )}
    </UIContext.Consumer>
  );
}

export default MobileNavigation;
