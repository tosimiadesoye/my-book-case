import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./header.css";
import "../book/book.css";

const Header = (props) => {
  let cartLength = props.cart;
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" xs={6} md={5}  className="description">
        <Navbar.Brand href="# " className="ml-5 pl-5 font-weight-bold">
          My Bookcase
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav-bar">
          <Nav className="nav navbar-nav ml-auto">
            <Link to="/" className="pr-5 text-secondary" variant="dark">
              Home
            </Link>
            <Link to="/about" className="pr-5 text-secondary">
              {" "}
              About
            </Link>
            <Link to="/search" className="pr-5 text-secondary">
              {" "}
              Search{" "}
            </Link>
            <Link to="/bookcase" className="pr-5 text-secondary">
              {" "}
              Bookcase({cartLength}){" "}
            </Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
