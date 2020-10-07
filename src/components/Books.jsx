import React from 'react';
import PropTypes from 'prop-types';


const Book = (props) => {    
    
    const {volumeInfo: {authors, title, description, imageLinks: {thumbnail}}} = props.book
    const price = () => {
        if(props.book.saleInfo.saleability === "FOR_SALE"){
           return "£" + props.book.saleInfo.listPrice.amount
        }else{
          return  "No price"
        }
    }
   
 
       
 return ( 

 <div>
     <h2>{title}</h2>
     <p>{description}</p>
     <img src={thumbnail} alt={title}/>
      <h2>{price()}</h2>
     <h2>{authors === 1 ? authors[0] : authors.concat(",")}</h2>
     <button onClick = {()=> props.addBook(title)}>remove</button>
 </div>
 );
}


   Book.propTypes = {
        volumeInfo: PropTypes.shape({title: PropTypes.string.isRequired}),
        authors: PropTypes.string.isRequired,
        description: PropTypes.string,
        listPrice: PropTypes.shape({amount: PropTypes.number.isRequired}),
        imageLinks: PropTypes.shape({thumbnail: PropTypes.string.isRequired}),
        
   };
   Book.defaultProps = { 
       title: "No title…",
       authors:"No authors",
       description: "No description",
       amount: "No amount",
       thumbnail: "No image"
    }
export default Book;
