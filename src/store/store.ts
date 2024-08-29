import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import authSlice from './authSlice'

export const store = configureStore({
  reducer: {
Todo: todoSlice,
auth: authSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch