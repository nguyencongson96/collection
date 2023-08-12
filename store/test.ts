import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
  extraReducers: (builder) => {},
});

const { reducer, actions } = testSlice;

export default reducer;
