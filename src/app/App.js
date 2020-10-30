import React, { useState} from 'react';
import data from '../models/books.json';
import BookList from '../components/book/BookList';
import Cart from '../components/cart/Cart';
import Pagination from '../components/pagination/Pagination';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from '../components/header/Header';
import About from '../pages/About';
import Search from '../components/search/Search'



const App = () => {
    const [books, setBooks] = useState(data);
    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const numOfBooksPerPage = 2;
    const [cart, setCart] = useState([])
   



   async function findBooks(value){
       const results = await
       fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
           pe=books&projection=lite`).then(res => res.json());
           if(!results.error) {
               setBooks(results.items)
           }
   }

    const addBookToCart = (title) => {
        let bookToAdd = books.find(book => title === book.volumeInfo.title)

        //check if book already exist in cart
        let item_exists_in_cart = cart.findIndex(item => bookToAdd.id === item.book.id)

        if (item_exists_in_cart >= 0) {
            //if book exists in cart, increase count
            cart[item_exists_in_cart].count += 1;
            setCart(cart);
        }
        else {
            //if book is not in cart, set count to 1 and add book to cart
            let newBook = {
                book: bookToAdd, 
                count: 1
            }

            //if cart is empty, initalize cart with this book
            if (cart.length === 0) {
                setCart([newBook])
            }
            else {
                //if cart already has books, append this book to cart.
                setCart([...cart, newBook])
            }
        }
    } 
                
    //current page

    const previousPage = currentPage * numOfBooksPerPage
    const firstPage = previousPage - numOfBooksPerPage;
    const currentPostsPosition = books.slice(firstPage,previousPage)
   //next page
    const nextPage = (numOfBooksPerPage) => setCurrentPage(numOfBooksPerPage)

    return (    
        
        <BrowserRouter>
            <Route exact path="/" render={()=> (
                <>
                    <Header cart={cart.length}/>

                    <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}
                    />
                    <BookList books={currentPostsPosition}
                        addBookToCart={addBookToCart}
                        stored="library"
                    />
                      
                    <Pagination
                        numOfBooksPerPage={numOfBooksPerPage}
                        totalNoOfBooks={books.length}
                        nextPage={nextPage} />
                        
                </>
            )} />
            
            <Route exact path="/about" render={()=> (
                <>     
                    <Header cart={cart.length}/>
                    <About/>
                </>
            )} />
         <Route exact path="/bookcase" render={() => (
                <>
                    <Header cart={cart.length}/>
                    <Cart cart={cart} setCart={setCart} />
                </>
            )} />

                     <Route exact path="/search" render={() => (
                <>
                    <Header cart={cart.length}/>
                    <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}
                        />
                    <BookList books={currentPostsPosition}
                        addBookToCart={addBookToCart}
                        stored="library"
                    />
                      
                    <Pagination
                        numOfBooksPerPage={numOfBooksPerPage}
                        totalNoOfBooks={books.length}
                        nextPage={nextPage} />               
                </>
            )} />
        
        </BrowserRouter>

             
    
    );
}
export default App;
