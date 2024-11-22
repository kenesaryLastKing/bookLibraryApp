import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload }
    },
    setResetFilters: () => {
      return initialState
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setOnlyFavoriteBook: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
  },
})

export const setTitleFilter = filterSlice.actions.setTitleFilter
export const setResetFilters = filterSlice.actions.setResetFilters
export const setAuthorFilter = filterSlice.actions.setAuthorFilter
export const setOnlyFavoriteBook = filterSlice.actions.setOnlyFavoriteBook

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteBook = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
