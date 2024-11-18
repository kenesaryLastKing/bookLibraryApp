import { useState } from 'react'
import './BookForm.css'
import { useDispatch } from 'react-redux'
import { addBook } from './../../redux/books/actionCreators'
import booksData from '../../data/books.json'
import createBookWithID from '../../utils/createBookwithID'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const handleRandomButton = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithID(randomBook)))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author })))
      setTitle('')
      setAuthor('')
    }
  }
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleRandomButton}>
          Add Random
        </button>
      </form>
    </div>
  )
}

export default BookForm
