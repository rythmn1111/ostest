import { configureStore } from '@reduxjs/toolkit'
import windowOpen from './windowOpen/windowOpen'
import  ZIndexState  from './z_index/zindex'
import processState from './kernel/kernel'

export const store = configureStore({
  reducer: {
    windowOpen: windowOpen,
    zIndex: ZIndexState,
    process: processState
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch