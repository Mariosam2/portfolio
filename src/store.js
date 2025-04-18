import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import cardReducer from "./slices/cardSlice";

export const store = configureStore({
  reducer: { projectState: projectReducer, cardState: cardReducer },
});
