import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './actions'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})