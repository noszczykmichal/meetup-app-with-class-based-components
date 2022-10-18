import { createSlice } from "@reduxjs/toolkit";

const initialMeetupState = { favorites: [], totalFavorites: 0 };

export const meetupSlice = createSlice({
  name: "meetupSlice",
  initialState: initialMeetupState,
  reducers: {
    addMeetupToFavorites(state, action) {
      const updatedFavorites = [...state.favorites].concat({
        ...action.payload,
      });
      const updatedTotalFavs = updatedFavorites.length;
      return { favorites: updatedFavorites, totalFavorites: updatedTotalFavs };
    },
    removeMeetupFromFavorites(state, action) {
      const searchedId = action.payload;
      const updatedFavorites = [...state.favorites].filter(
        (meetup) => meetup.id !== searchedId,
      );
      const updatedTotalFavs = updatedFavorites.length;
      return { favorites: updatedFavorites, totalFavorites: updatedTotalFavs };
    },
    clearAllFavorites() {
      return { favorites: [], totalFavorites: 0 };
    },
  },
});

export const meetupActions = meetupSlice.actions;
