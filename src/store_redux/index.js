import { configureStore } from "@reduxjs/toolkit";

import { meetupSlice } from "./meetupSlice";

const store = configureStore({
  reducer: {
    meetups: meetupSlice.reducer,
  },
});

export default store;
