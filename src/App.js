import React, { useState } from 'react';
import data from './models/books.json';
import BookList from './components/BookList';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Search from './components/Search'



const App = (props) => {
    
    const [books, setBooks] = useState(data);
    const [keyword, setKeyword] = useState('')

    async function findBooks(value){
       // const value="dog"
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
       
    return (    
        
        <BrowserRouter>
            <Route exact path="/" render={()=> (
                <>
                    <Header/>
                    <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
                    <BookList books={books} addBook={addBook}  stored="library"/>         
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
