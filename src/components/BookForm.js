import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext'


const BookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Add new book:</label>
            <input required type="text" placeholder="Enter Book Title" value={title} onChange={(event) => setTitle(event.target.value)} />
            <input required type="text" placeholder="Enter Author" value={author} onChange={(event) => setAuthor(event.target.value)} />
            <input type="submit" value="ADD BOOK" />
        </form>
    );
}

export default BookForm;