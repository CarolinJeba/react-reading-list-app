import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDescription from '../components/BookDescription';


const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book =>
                    <BookDescription book={book} key={book.id} />
                )}
            </ul>
        </div>
    ) : (
            <div className="no-books">
                No books to show
            </div>
        );
}

export default BookList;