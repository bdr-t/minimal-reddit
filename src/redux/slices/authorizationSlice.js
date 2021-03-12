import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToken = createAsyncThunk("authorization/fetchToken", async (code) => {
  let redirectUri = "http://localhost:3000/callback/";
  const encode = btoa(
    `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_PASSWORD}`
  );
  const response = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&duration=permanent`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `basic ${encode}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  console.log(response.refresh_token);
  let authorization = {
    authorization: true,
    token: response.access_token,
    refreshToken: response.refresh_token,
  };
  return authorization;
});

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    status: "idle",
    authorization: false,
    token: null,
    refreshToken: null,
  },
  reducers: {},
  extraReducers: {
    [fetchToken.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchToken.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.authorization = action.payload.authorization;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    [fetchToken.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default authorizationSlice.reducer;
