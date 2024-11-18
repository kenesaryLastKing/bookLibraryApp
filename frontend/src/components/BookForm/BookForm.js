import { useState } from 'react'
import './BookForm.css'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from './../../redux/books/actionCreators'
import booksData from '../../data/books.json'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const handleRandomButton = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    const randomBookWithID = { ...randomBook, id: uuidv4(), isFavourite: false }
    dispatch(addBook(randomBookWithID))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const book = {
        title,
        author,
        id: uuidv4(),
        isFavourite: false,
      }
      dispatch(addBook(book))
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
