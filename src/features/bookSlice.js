import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [    
        {
            id: 1, 
            title: 'My Life', 
            author: 'Mohammed Faysal', 
            price: 50, 
            quantity: 2
        },
        {
            id: 2, 
            title: 'Harry Potter', 
            author: 'JK Rolling', 
            price: 100, 
            quantity: 5
        },
    ]
}

export const bookSlice = createSlice({
    name: 'bookStore',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const {id, title, author, price, quantity} = action.payload

            const existingBook = state.books.find((book) => book.id === id)

            if(existingBook){
                existingBook.title = title;
                existingBook.author = author;
                existingBook.price = price;
                existingBook.quantity = quantity;
            }
        },
        deleteBook: (state, action)=> {
            const id = action.payload
            state.books = state.books.filter((book) => book.id !== id)  // mutable way te korteci. But behind the scence Redux eitake immutable way te korbe.
        }
    }
})

export const {addBook, updateBook, deleteBook} = bookSlice.actions

export default bookSlice.reducer
