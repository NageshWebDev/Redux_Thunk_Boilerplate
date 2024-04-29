import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  status: "unknown",
  type: "unknown",
  response: {
    ok: true,
    message: "",
  },
};

const thunkSlice = createSlice({
  name: "ThunkSlice",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setResponse(state, action) {
      state.response.ok = action.payload.success;
      state.response.message = action.payload.message;
    },
  },
});

// thunk action creator
export function customThunk(delay) {
  // thunk function
  return async (dispatch, getstate) => {
    console.log("🚀 ~ return ~ getstate:", getstate());
    const URL = `https://fakeresponder.com?sleep=${delay}`;
    const { setLoading, setStatus, setType, setResponse } = thunkSlice.actions;
    try {
      dispatch(setLoading(true));
      const response = await fetch(URL);
      const { status, type } = response;
      dispatch(setStatus(status));
      dispatch(setType(type));
      dispatch(setResponse({ success: true, message: "Successful" }));
    } catch (error) {
      dispatch(
        setResponse({ success: false, message: "Something went wrong x_X" })
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export default thunkSlice;
