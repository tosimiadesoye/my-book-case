import React from "react";
import Book from "./Books";



const BookList = ({books,addBookToCart}) => {
    
  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          addBookToCart={addBookToCart}  
        />
      ))}
          
    </>
  );
};
export default BookList;
