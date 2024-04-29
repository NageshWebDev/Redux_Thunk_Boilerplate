import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterBSlice = createSlice({
  name: "CounterB",
  initialState,
  reducers: {
    square(state) {
      state.count = Math.pow(state.count, 2);
    },
    squareRoot(state) {
      state.count = Math.sqrt(state.count);
    },
    incrementBy1(state) {
      state.count += 1;
    },
    decrementBy1(state) {
      state.count -= 1;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
  },
});

export default counterBSlice;
