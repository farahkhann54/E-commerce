import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const AddToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value += 1;

      // ✅ Save updated cart value to localStorage (only in browser)
      if (typeof window !== "undefined") {
        localStorage.setItem("cartValue", JSON.stringify(state.value));
      }
    },
    removeItem: (state) => {
      if (state.value >= 1) {
        state.value -= 1;
      }

      // ✅ Save updated cart value to localStorage (only in browser)
      if (typeof window !== "undefined") {
        localStorage.setItem("cartValue", JSON.stringify(state.value));
      }
    },
  },
});

export const { addItem, removeItem } = AddToCart.actions;
export default AddToCart.reducer;
