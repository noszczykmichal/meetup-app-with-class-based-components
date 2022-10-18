/* eslint-disable react/jsx-no-constructed-context-values */
import { Component, createContext } from "react";
import PropTypes from "prop-types";

const UIContext = createContext({
  backdropOpen: Boolean,
  mobileNavbarOpen: Boolean,
  modalOpen: Boolean,
  hideAllModals: () => {},
  navbarToggler: () => {},
  modalToggler: () => {},
});

export class UIContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backdropVisible: false,
      mobileNavbarVisible: false,
      modalVisible: false,
    };
  }

  hideComponentsHandler = () => {
    this.setState({
      backdropVisible: false,
      mobileNavbarVisible: false,
      modalVisible: false,
    });
  };

  navbarHandler = () => {
    this.setState((prevState) => ({
      backdropVisible: !prevState.backdropVisible,
      mobileNavbarVisible: !prevState.mobileNavbarVisible,
    }));
  };

  modalHandler = () => {
    this.setState({
      backdropVisible: true,
      mobileNavbarVisible: false,
      modalVisible: true,
    });
  };

  render() {
    const { children } = this.props;
    const { backdropVisible, mobileNavbarVisible, modalVisible } = this.state;
    const contextValue = {
      backdropOpen: backdropVisible,
      mobileNavbarOpen: mobileNavbarVisible,
      modalOpen: modalVisible,
      hideAllModals: this.hideComponentsHandler,
      navbarToggler: this.navbarHandler,
      modalToggler: this.modalHandler,
    };

    return (
      <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
    );
  }
}

UIContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UIContext;
