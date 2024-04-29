import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  status: "unknown",
  type: "unknown",
  response: {
    ok: true,
    message: "",
  },
};

export const fetchData = createAsyncThunk(
  "thunkSlice/fetchData",
  async (delay) => {
    const URL = `https://fakeresponder.com?sleep=${delay}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { status, type } = response;
      return { status, type, success: true, message: "Successful" };
    } catch (error) {
      console.error("Error occurred:", error);
      return { success: false, message: "Something went wrong x_X" };
    }
  }
);

const thunkSlice = createSlice({
  name: "ThunkSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        // When our request is pending:
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        // When our request is fulfilled:
        const { status, type, success, message } = action.payload;
        state.status = status;
        state.type = type;
        state.response.ok = success;
        state.response.message = message;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        // When our request is rejected:
        const { success, message } = action.payload;
        state.response.ok = success;
        state.response.message = message;
        state.loading = false;
      });
    /*
      * Extra reducers for fetchData2
    builder
    .addCase(fetchData2.pending, (state) => {
      * Handle pending action for fetchData2
    })
    .addCase(fetchData2.fulfilled, (state, action) => {
      * Handle fulfilled action for fetchData2
    })
    .addCase(fetchData2.rejected, (state, action) => {
      * Handle rejected action for fetchData2
    });
    */
  },
});

export default thunkSlice;
