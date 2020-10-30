import React from 'react';
import './about.css'



const Header = (props) => {
    
    return(
        <>      
           
            <header className="mt-5 mb-5 text-center header">Welcome to the Bookcase Application</header>        
            <p className="about pl-5 bg-warning">The following application was created by Tosimi Adesoye.
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