import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./test";
const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
