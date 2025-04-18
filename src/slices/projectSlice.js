import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: null,
};

export const projectSlice = createSlice({
  name: "projectState",
  initialState,
  reducers: {
    setProject: (state, payload) => {
      state.project = payload.payload;
    },
    unsetProject: (state) => {
      state.project = null;
    },
  },
});

export const { setProject, unsetProject } = projectSlice.actions;

export default projectSlice.reducer;
