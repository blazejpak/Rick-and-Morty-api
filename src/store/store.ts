import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";

export const store = configureStore({
  reducer: {
    dataSlice: dataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
