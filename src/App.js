import React, { useState } from 'react';
import data from './models/books.json';
import BookList from './components/BookList';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';



const App = (props) => {
    
    const [books, setBooks] = useState(data);
    
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
                    <BookList books={books} addBook={addBook}  stored="library"/>
            
                </>
            )} />
                
           
                <Route exact path="/bookcase" render={()=> (
                <>
                    <Header/>
                    <BookList books={books} addBook={addBook}  stored="library"/>
                    
                </>
            )} />

                {/*<Route exact path="/" render={()=> (
                <>
                     <BookList books={books} addBook={addBook}  stored="library"/>              
                </>
                )} />*/}
            <Route exact path="/about" render={()=> (
                <>
                    <About/>                
                </>
            )} />

                
        
        </BrowserRouter>

             
    
    );
}
export default App;
