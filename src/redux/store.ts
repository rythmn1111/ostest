import { configureStore } from '@reduxjs/toolkit'
import windowOpen from './windowOpen/windowOpen'
import  ZIndexState  from './z_index/zindex'
export const store = configureStore({
  reducer: {
    windowOpen: windowOpen,
    zIndex: ZIndexState
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch