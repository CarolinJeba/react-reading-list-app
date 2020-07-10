import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Carol's Reading List</h1>
      <p>Currently you have {books.length} books</p>
    </div>
  );
}
 
export default Navbar;