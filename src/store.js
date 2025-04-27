import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import cardReducer from "./slices/cardSlice";
import loadingReducer from "./slices/loadingSlice";
import copyReducer from "./slices/copySlice";

export const store = configureStore({
  reducer: {
    projectState: projectReducer,
    cardState: cardReducer,
    loadingState: loadingReducer,
    copyState: copyReducer,
  },
});
