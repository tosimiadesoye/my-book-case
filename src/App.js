import React, { useState} from 'react';
import data from './models/books.json';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Pagination from './components/Pagination';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Search from './components/Search'



const App = (props) => {
    const [books, setBooks] = useState(data);
    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const numOfBooksPerPage = 1;
    const [cart, setCart] = useState([])
    

    async function findBooks(value){
        const results = await
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
            pe=books&projection=lite`).then(res => res.json());
            if(!results.error) {
                setBooks(results.items)
            }
    }
    
    if(books.length === 0) {
        return 'No books found'
    }



  

    function addBookToCart(title) {
       let findBooks = books.filter(book => (title === book.volumeInfo.title))              
        setCart(existingBook => (existingBook.concat(findBooks)))    
    }
        
    function removeBook(title) {
        const newBooks = books.filter(book => {
            console.log(title !== book.volumeInfo.title)
            return title !== book.volumeInfo.title
        })
        setBooks(newBooks)
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

                    <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
                    <BookList books={currentPostsPosition}
                        // removeBook={removeBook}
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
                    
                    <Header/>
                    <About/>
                   

                </>
            )} />
         <Route exact path="/cart" render={() => (
                <>
                    <Header/>
                    <Cart cart={cart} removeBook={removeBook}  />
                    </>
            )} />

                     <Route exact path="/search" render={() => (
                <>
                    <Header/>
                    <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
                    <BookList books={currentPostsPosition} stored="library"/>
                        
                </>
            )} />
        
        </BrowserRouter>

             
    
    );
}
export default App;
