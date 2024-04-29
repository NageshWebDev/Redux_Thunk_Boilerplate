import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counterA";
import counterBSlice from "../feature/counterB";
import thunkSlice from "../feature/ThunkSlice";

export default configureStore({
  // You will use below names when using useSelector
  reducer: {
    counterAReducer: counterSlice.reducer,
    counterBReducer: counterBSlice.reducer,
    thunkReducer: thunkSlice.reducer,
  },
});
