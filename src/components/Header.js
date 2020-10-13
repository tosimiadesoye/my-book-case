import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap'



const Header = (props) => {
    
    return(
        <>     
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="#">My Bookcase</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-nav-bar">
                <Nav className="mr-auto">
                <Nav.Link> <Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/bookcase" className='bookLink'> Bookcase </Link></Nav.Link>
                <Nav.Link><Link to="/about" className='aboutLink'> About</Link></Nav.Link>
           
           
           </Nav>
           </Navbar.Collapse>
           </Navbar>
        </>
    )
}
export default Header