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
  async ({link, token}) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    const response = await axios
      .get(link, config)
      .then((response) => response.data.data.children);
    let list = [];
    for (let x in response) {
      let post = {
        id: response[x].data.id,
        author_fullname: response[x].data.author_fullname,
        comments: response[x].data.num_comments,
        author: response[x].data.author,
        is_video: response[x].data.is_video,
        media: response[x].data.media,
        post_id: response[x].data.name,
        over_18: response[x].data.over_18,
        link: response[x].data.permalink,
        selftext: response[x].data.selftext_html,
        subreddit: response[x].data.subreddit,
        subreddit_id: response[x].data.subreddit_id,
        thumbnail: response[x].data.thumbnail,
        title: response[x].data.title,
        downs: response[x].data.downs,
        created: response[x].data.created_utc,
        ups: response[x].data.ups,
        url: response[x].data.url,
        is_gallery: response[x].data.is_gallery,
        likes: response[x].data.likes,
        saved: response[x].data.saved,
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
