import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'

export default configureStore({
  reducer: {
   posts : postsReducer,
  },
  middleware : getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})
