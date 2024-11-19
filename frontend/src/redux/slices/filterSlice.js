import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
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
  },
})

export const setTitleFilter = filterSlice.actions.setTitleFilter
export const setResetFilters = filterSlice.actions.setResetFilters
export const selectTitleFilter = (state) => state.filter.title
export default filterSlice.reducer
