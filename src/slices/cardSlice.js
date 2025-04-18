import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const cardSlice = createSlice({
  name: "cardState",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = cardSlice.actions;

export default cardSlice.reducer;
