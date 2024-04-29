import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counterA";
import counterBSlice from "../feature/counterB";
import thunkSlice from "../feature/ThunkSlice";
import thunkSliceB from "../feature/ThunkSliceB";

// Simplifying Store Setup with configureStore
// First step is to create the slices of state, which we have created in features folder

export default configureStore({
  // You will use below names when using useSelector
  reducer: {
    counterAReducer: counterSlice.reducer,
    counterBReducer: counterBSlice.reducer,
    thunkReducer: thunkSlice.reducer,
    thunkReducerB: thunkSliceB.reducer,
  },
});
