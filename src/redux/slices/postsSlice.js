import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import axios from "axios";

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit) => {
    let sub;
    if (subreddit) {
      sub = "r/" + subreddit;
    } else {
      sub = "hot";
    }
    const response = await axios
      .get("https://www.reddit.com/" + sub + "/.json")
      .then((response) => response.data.data.children);
    let list = [];
    for (let x in response) {
      let post = {
        id: response[x].data.id,
        author: response[x].data.author_fullname,
        is_video: response[x].data.is_video,
        media: response[x].data.media,
        post_id: response[x].data.name,
        over_18: response[x].data.over_18,
        link: response[x].data.permalink,
        selftext: response[x].data.selftext,
        subreddit: response[x].data.subreddit,
        subreddit_id: response[x].data.subreddit_id,
        thumbnail: response[x].data.thumbnail,
        title: response[x].data.title,
        ups: response[x].data.ups,
        url: response[x].data.url,
        is_gallery: response[x].data.is_gallery,
      };
      list.push(post);
    }

    return list;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      postsAdapter.upsertMany(state, action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export default postsSlice.reducer;
