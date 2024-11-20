import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
import {
  selectAuthorFilter,
  selectTitleFilter,
  setAuthorFilter,
  setResetFilters,
  setTitleFilter,
} from '../../redux/slices/filterSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)

  const titleFilterChangeHandler = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  const resetFilterHandler = () => {
    dispatch(setResetFilters())
  }
  const authorFilterHandler = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={titleFilterChangeHandler}
            value={titleFilter}
            type="text"
            placeholder="Filter by title..."
            disabled={authorFilter ? true : undefined}
          />
        </div>
        <div className="filter-group">
          <input
            onChange={authorFilterHandler}
            value={authorFilter}
            type="text"
            placeholder="Filter by author..."
            disabled={titleFilter ? true : undefined}
          />
        </div>
        <button type="button" onClick={resetFilterHandler}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
