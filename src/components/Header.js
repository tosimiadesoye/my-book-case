import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {
    
    return(
        <>      
           <h1>My Bookcase</h1>
           <Link to="/">Home</Link> 
           <Link to="/bookcase" className='bookLink'> Bookcase </Link> 
        </>
    )
}
export default Header