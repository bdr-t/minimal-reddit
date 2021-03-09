import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import postsReducer from './reducers/postsSlice'

export default configureStore({
  reducer: {
   posts : postsReducer,
  },
  middleware : getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})
