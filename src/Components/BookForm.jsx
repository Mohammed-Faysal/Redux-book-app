import {useEffect, useState} from 'react'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/bookSlice';

const BookForm = ({bookToEdit, onCancel}) => {

    const [book, setBook] = useState({
        title: '', 
        author: '', 
        price: '', 
        quantity: ''
    })

    useEffect(()=> {
        if(bookToEdit){
            setBook(bookToEdit)
        }
    }, [bookToEdit])

    const dispatch = useDispatch()

    const handleChange = (e) => {
       const {name, value} = e.target
       setBook((previous) => ({...previous, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(bookToEdit){
            dispatch(updateBook(book))
            onCancel()
        }else{
            dispatch(addBook({...book, id: nanoid()}));
        }

        setBook({
            title: '', 
            author: '', 
            price: '', 
            quantity: ''
        })

    }

    const onCancelHandler = () => {
        onCancel()
        setBook({
            title: '', 
            author: '', 
            price: '', 
            quantity: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Book Title' name='title' value={book.title} onChange={handleChange}/><br/>
            <input type="text" placeholder='Author' name='author' value={book.author} onChange={handleChange}/><br/>
            <input type="number" placeholder='Price' name='price' value={book.price} onChange={handleChange}/><br/>
            <input type="number" placeholder='Quantity' name='quantity' value={book.quantity} onChange={handleChange}/>
            <button type="submit">{bookToEdit ? "Update Book" : "Add Book"}</button>
            {bookToEdit && <button onClick={onCancelHandler}>Cancel Edit</button>}
        </form>
    );
};

export default BookForm;