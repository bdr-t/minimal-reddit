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
  after: "",
  first: true
});

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ link, token}) => {
    let after;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let response = await axios
      .get(
        link,
        config
      )
      .then((response) => {
        after = response.data.data.after;
        return response.data.data.children;
      });
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
        gallery_data: response[x].data.gallery_data,
      };
      list.push(post);
    }

    const res = [list, after];
    return res;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    remove(state, {payload}){
      postsAdapter.removeAll(state, payload);
      state.after = ''
      state.status = 'idle'
      state.first = true
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      postsAdapter.addMany(state, action.payload[0]);
      state.after = action.payload[1];
      state.first = false
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

export const {remove} = postsSlice.actions

export default postsSlice.reducer;
