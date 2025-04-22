import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loadingState",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    finishedLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loading, finishedLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
