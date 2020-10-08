import React from 'react';
import {Link} from 'react-router-dom';
import './about.css'


const Header = (props) => {
    
    return(
        <>      
           <Link to="/">Home</Link>
           <Link to="/about" className='aboutLink'> About</Link> 
            <header>Welcome to the Bookcase Application</header>        
            <p>The following application was created by Tosimi Adesoye.
                This bookcase app displays a list of books that a user can
                save to a local bookcase
                Click on the "Add + " button to add a book to your bookcase.
                Use the search bar to find the latest books by name, author
                or description
            </p>
        </>
    )
}
export default Header