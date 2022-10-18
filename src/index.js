import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store_redux/index";
import { UIContextProvider } from "./store_context/uiContext";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <UIContextProvider>
        <App />
      </UIContextProvider>
    </Provider>
  </BrowserRouter>,
);
