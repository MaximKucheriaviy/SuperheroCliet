import { configureStore } from "@reduxjs/toolkit";
import { HeroSlice, LoaderSlice } from "./slices";

export const store = configureStore({
  reducer: {
    heroes: HeroSlice.reducer,
    loaderState: LoaderSlice.reducer,
  },
});
