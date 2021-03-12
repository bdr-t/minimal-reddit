import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import authorizationReducer from './slices/authorizationSlice'

export default configureStore({
  reducer: {
   posts : postsReducer,
   authorization : authorizationReducer,
  },
  middleware : getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})
