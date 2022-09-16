/* eslint-disable react/jsx-no-constructed-context-values */
import React, { Suspense, Component } from "react";
import { Route, Routes } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context";

import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import Spinner from "./components/ui/Spinner";

const NewMeetupPage = React.lazy(() => import("./pages/NewMeetup"));
const FavoritesPage = React.lazy(() => import("./pages/Favorites"));

class App extends Component {
  render() {
    return (
      <FavoritesContextProvider>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" exact element={<AllMeetupsPage />} />
              <Route path="/new-meetup" element={<NewMeetupPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </FavoritesContextProvider>
    );
  }
}

export default App;
