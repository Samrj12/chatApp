import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './Features/account/accountSlice'
export const store = configureStore({
  reducer: {
    account : accountReducer
  },
})