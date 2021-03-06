import React from 'react';
import './about.css'



const Header = (props) => {
    
    return(
        <div className='container-about' xs={1} md={2}>      
            <header className='header'>Welcome to the Bookcase Application</header>        
            <p className='about' >The following application was created by Tosimi Adesoye.
                This bookcase app displays a list of books that a user can
                save to a local bookcase
                Click on the "Add + " button to add a book to your bookcase.
                Use the search bar to find the latest books by name, author
                or description
            </p>
        </div>
    )
}
export default Header