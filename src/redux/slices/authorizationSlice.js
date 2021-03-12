import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    authorization: false,
    token: null,
    refreshToke: null,
    status: null,
  },
  reducers: {},
});

export default authorizationSlice.reducer