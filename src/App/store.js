import { configureStore } from "@reduxjs/toolkit";
import bookReducer  from "../features/bookSlice";

const store = configureStore({
    reducer: {
        booksR: bookReducer
    }
})

export default store