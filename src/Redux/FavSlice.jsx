import { createSlice } from "@reduxjs/toolkit";

// Load saved favourite IDs from localStorage if available
const savedFavs = typeof window !== "undefined" ? localStorage.getItem("favIds") : null;

const initialState = {
  ids: savedFavs ? JSON.parse(savedFavs) : [],
};

const favSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((favId) => favId !== id);
      } else {
        state.ids.push(id);
      }

      // Save updated favourite IDs to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("favIds", JSON.stringify(state.ids));
      }
    },
  },
});

export const { toggleFavourite } = favSlice.actions;
export default favSlice.reducer;
