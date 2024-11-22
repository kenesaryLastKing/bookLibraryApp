import { useDispatch, useSelector } from 'react-redux'
import './BookList.css'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  selectAuthorFilter,
  selectOnlyFavoriteBook,
  selectTitleFilter,
} from '../../redux/slices/filterSlice'
import {
  deleteBook,
  selectBooks,
  toggleFavorite,
} from '../../redux/slices/bookSlice'

const BookList = () => {
  const book = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteBook = useSelector(selectOnlyFavoriteBook)

  const dispatch = useDispatch()
  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id))
  }
  const toggleFavoriteHandler = (id) => {
    dispatch(toggleFavorite(id))
  }
  const filteredBooks = book.filter((book) => {
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesFavorite = onlyFavoriteBook ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highlightMatch = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`${filter}`, 'gi')

    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {book.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. "{highlightMatch(book.title, titleFilter)}" by{' '}
                <strong>{highlightMatch(book.author, authorFilter)}</strong> (
                {book.source})
              </div>
              <div className="book-actions">
                <span onClick={() => toggleFavoriteHandler(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => deleteBookHandler(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
