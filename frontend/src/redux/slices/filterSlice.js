import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload }
    },
    setResetFilters: (state) => {
      return initialState
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
  },
})

export const setTitleFilter = filterSlice.actions.setTitleFilter
export const setResetFilters = filterSlice.actions.setResetFilters
export const setAuthorFilter = filterSlice.actions.setAuthorFilter

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author

export default filterSlice.reducer
