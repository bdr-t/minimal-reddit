import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import subPostsReducer from './slices/subPostsSlice'

export default configureStore({
  reducer: {
   posts : postsReducer,
   subredditPosts: subPostsReducer
  },
  middleware : getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})
