import React, { useState } from 'react';
import data from './models/books.json';
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Search from './components/Search'



const App = (props) => {
    const [books, setBooks] = useState(data);
    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [numOfPostPerPages ] = useState(2)
   
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
        function addBook(title) {
            console.log(`The Book ${title} was clicked`);
            const newBooks = books.filter(book => {
               if (title !== book.volumeInfo.title){
                    return true
               } else{
                   return false
               }
            } )
            setBooks(newBooks)
        }
   
    //current page
    const previousPage = currentPage * numOfPostPerPages
    const firstPage = previousPage - numOfPostPerPages;
    const currentPostsPosition = books.slice(firstPage,previousPage)
   //next page
    const nextPage = (numOfPostPerPages) => setCurrentPage(numOfPostPerPages)
    return (    
        
        <BrowserRouter>
            <Route exact path="/" render={()=> (
                <>
                    <Header/>
                    <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
                    <BookList books={currentPostsPosition}
                        addBook={addBook}
                        stored="library"
                    />
                    <Pagination numOfPostPerPages={numOfPostPerPages} totalNoOfBooks={books.length} nextPage={nextPage} />
                </>
            )} />
                
           
                <Route exact path="/bookcase" render={()=> (
                <>
                    <Header/>
                    <BookList books={books} addBook={addBook}  stored="library"/>
                    
                </>
            )} />


            
            <Route exact path="/about" render={()=> (
                <>
                    
                    <Header/>
                    <About/>
                   

                </>
            )} />
        
        </BrowserRouter>

             
    
    );
}
export default App;
