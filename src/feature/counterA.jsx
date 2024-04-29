import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterASlice = createSlice({
  name: "myCounterSlice",
  initialState,
  reducers: {
    incrementBy1(state) {
      state.count += 1;
    },
    decrementBy1(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
    decrementByAmount(state, action) {
      state.count -= action.payload;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export default counterASlice;
