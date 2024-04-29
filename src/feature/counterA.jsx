import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

/*

Redux Toolkit includes a createSlice function that will
auto-generatethe action types and action creators for you,
based on the names of the reducer functions you provide.

Reducer:
  1) Define how that state is updated
  2) Define which specific actions result in state updates
*/
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

// OR
/*
*Extract the action creators object and the reducer
  const { actions, reducer } = postsSlice

  * Extract and export each action creator by name
  export const { createPost, updatePost, deletePost } = actions

  * Export the reducer, either as a default or named export
  export default reducer
*/
