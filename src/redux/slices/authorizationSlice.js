import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToken = createAsyncThunk(
  "authorization/fetchToken",
  async (code) => {
    let redirectUri = process.env.REACT_APP_REDDIRECT_URI;
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
    let authorization = {
      authorization: true,
      token: response.access_token,
      refreshToken: response.refresh_token,
    };
    window.localStorage.setItem("refreshToken", response.refresh_token);
    setTimeout(() => {
      refreshToken(authorization.refreshToken);
    }, 3500000);
    return authorization;
  }
);

export const refreshToken = createAsyncThunk(
  "authorization/refreshToken",
  async (refreshToken) => {
    const encode = btoa(
      `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_PASSWORD}`
    );
    const response = await fetch("https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      body: `grant_type=refresh_token&refresh_token=${refreshToken}&duration=permanent`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `basic ${encode}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    let authorization = {
      authorization: true,
      token: response.access_token,
      refreshToken: response.refresh_token,
    };
    return authorization;
  }
);

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
    [refreshToken.pending]: (state, action) => {
      state.status = "loading";
    },
    [refreshToken.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.authorization = action.payload.authorization;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    [refreshToken.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default authorizationSlice.reducer;
