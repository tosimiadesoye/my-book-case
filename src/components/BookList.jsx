import React from "react";
import Book from "./Books";



const BookList = (props) => {
    
  return (
    <>
      {props.books.map((book) => (
        <Book
          key={book.id}
          book={book}
          // removeBook={props.removeBook}
          addBookToCart={props.addBookToCart}  
        />
      ))}
          
    </>
  );
};
export default BookList;
