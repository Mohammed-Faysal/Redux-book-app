
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../features/bookSlice';

const BookList = ({onHandleEdit}) => {

    const {books} = useSelector((state) => state.booksR)

    const dispatch = useDispatch()

    console.log(books)

    const handleDelete = (id) => {
        if(confirm('Are you sure want to delete!')){
            dispatch(deleteBook(id))
        }
    }

    const handleEdit = (book) => {
        onHandleEdit(book)
    }

    return (
        <div>
            <h2>List of Books</h2>
            {
            books && books.length > 0 ? (
                <ul>
                {books.map((book)=> (
                    <li key={book.id}>
                        {book.title} by {book.author} - ${book.price} - {book.quantity} pics
                        <button onClick={()=> handleDelete(book.id)}>Delete</button>
                        <button onClick={()=> handleEdit(book)}>Edit</button>
                    </li>
                ))}
            </ul>
            ) : (<p>No Books available here.</p>)
        }
        </div>
    );
};

export default BookList;