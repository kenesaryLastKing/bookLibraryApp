import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/bookSlice'
import filterReducer from './slices/filterSlice'
import errorReducer from './slices/errorlSice.js'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
})

export default store
