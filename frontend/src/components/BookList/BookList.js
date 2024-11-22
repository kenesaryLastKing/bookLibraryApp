import { useDispatch, useSelector } from 'react-redux'
import './BookList.css'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  selectAuthorFilter,
  selectOnlyFavoriteBook,
  selectTitleFilter,
} from '../../redux/slices/filterSlice'

const BookList = () => {
  const books = useSelector((state) => state.books)
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
  const filteredBooks = books.filter((book) => {
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesFavorite = onlyFavoriteBook ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite
  })

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. "{book.title}" by <strong>{book.author}</strong>
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
