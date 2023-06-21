import { configureStore } from "@reduxjs/toolkit";
import { HeroSlice } from "./slices";

export const store = configureStore({
  reducer: {
    heroes: HeroSlice.reducer,
  },
});
