import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasCopied: null,
};

export const copySlice = createSlice({
  name: "copyState",
  initialState,
  reducers: {
    copied: (state) => {
      state.hasCopied = true;
    },
    errorWhileCopying: (state) => {
      state.hasCopied = false;
    },
    didntCopyYet: (state) => {
      state.hasCopied = null;
    },
  },
});

export const { copied, errorWhileCopying, didntCopyYet } = copySlice.actions;

export default copySlice.reducer;
