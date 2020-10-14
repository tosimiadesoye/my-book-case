 import React, {useState} from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'

 const Search = (props) => {
    
const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword)
    }      
return (
         <div class="text-center float-right">
          
           <Form class="center" onSubmit={handleSubmit}  inline>

                <Form.Group class="text-center" controlId="searchKeyword">
                    <Form.Label >Enter Search</Form.Label>
                    <Form.Control className="mr-sm-1 text-center" type="keyword" placeholder="Enter keyword"  value={props.keyword}  onChange={(e)=>props.setKeyword(e.target.value)}  />
                    </Form.Group>
               <Button variant="primary" type="submit">submit</Button>
           </Form>
         </div>
     )
 }
export default Search;