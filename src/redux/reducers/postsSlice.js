import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import axios from 'axios'

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get('https://www.reddit.com/hot/.json')
  .then((response) => response.data.data.children);
    let list = [];
    for (let num in response) {
      list.push(response[num].data)
    }
  return list;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      postsAdapter.upsertMany(state, action.payload)
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts)

export default postsSlice.reducer;