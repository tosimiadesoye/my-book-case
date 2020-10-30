import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "../book/book.css";

const Search = ({ keyword, findBooks, setKeyword }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
      findBooks(keyword);
  };
  return (
    <div className="d-flex pt-5 justify-content-center description">
    

     <Form onSubmit={handleSubmit}  inline>

                <Form.Group controlId="searchKeyword">
                    <Form.Label >Enter Search</Form.Label>
                <Form.Control className="mr-sm-1 text-center"
                    type="keyword" placeholder="Enter keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                    </Form.Group>
               <Button variant="primary" type="submit">submit</Button>
           </Form> 
    </div>
  );
};
export default Search;
