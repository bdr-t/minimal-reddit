import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import axios from "axios";

const postsAdapter = createEntityAdapter;
const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchSubRedditPosts = createAsyncThunk(
  "subredditPosts/fetchPosts",
  async (subreddit) => {
    const response = await axios
      .get(`https://www.reddit.com/r/${subreddit}/.json`)
      .then((response) => response.data.data.children);
    let list = [];
    for (let num in response) {
      list.push(response[num].data);
    }
    return list;
  }
);

const subPostsSlice = createSlice({
  name: "subredditPosts",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchSubRedditPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSubRedditPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      postsAdapter.upsertMany(state, action.payload);
    },
    [fetchSubRedditPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
  } = postsAdapter.getSelectors(state => state.posts)

export default subPostsSlice.reducer;
