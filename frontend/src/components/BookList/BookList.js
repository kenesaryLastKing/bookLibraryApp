import { useDispatch, useSelector } from 'react-redux'
import './BookList.css'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'

const BookList = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()
  const deleteBookHandler = (id) => {
    dispatch(deleteBook(id))
  }
  const toggleFavoriteHandler = (id) => {
    dispatch(toggleFavorite(id))
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
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
