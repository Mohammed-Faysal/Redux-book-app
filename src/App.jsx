import './App.css'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import {useState} from 'react'

function App() {

  const [bookToEdit, setBookToEdit] = useState(null)

  const handleEdit = (book) => {
    setBookToEdit(book)
  }
  
  const handleCancelEdit = (book) => {
    setBookToEdit(null)
  }

  return (
    <div>
      <BookForm bookToEdit={bookToEdit} onCancel={handleCancelEdit}/>
      <BookList onHandleEdit = {handleEdit}/>
    </div>
  )
}

export default App
