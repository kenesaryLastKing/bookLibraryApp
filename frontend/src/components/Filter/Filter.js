import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
import {
  selectTitleFilter,
  setResetFilters,
  setTitleFilter,
} from '../../redux/slices/filterSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const titleFilterChangeHandler = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  const resetFilterHandler = () => {
    dispatch(setResetFilters())
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
