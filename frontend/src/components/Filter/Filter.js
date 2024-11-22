import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
import {
  selectAuthorFilter,
  selectOnlyFavoriteBook,
  selectTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteBook,
  setResetFilters,
  setTitleFilter,
} from '../../redux/slices/filterSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteBook = useSelector(selectOnlyFavoriteBook)
  //const isFavoriteBook = useSelector(selectFavoriteBook)

  const titleFilterChangeHandler = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  const resetFilterHandler = () => {
    dispatch(setResetFilters())
  }
  const authorFilterHandler = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }
  const onlyFavoriteBookHandler = () => {
    dispatch(setOnlyFavoriteBook())
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
        <div className="filter-group">
          <label>
            <input
              checked={onlyFavoriteBook}
              type="checkbox"
              onChange={onlyFavoriteBookHandler}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={resetFilterHandler}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
