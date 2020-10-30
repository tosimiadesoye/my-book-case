import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";

const Pagination = ({ numOfBooksPerPage, totalNoOfBooks, nextPage }) => {
  let numOfPages = [];

  let index = 1;
  while (index <= Math.ceil(totalNoOfBooks / numOfBooksPerPage)) {
    numOfPages.push(index); 
    index++;
  }
  return (
    <>
      <Row>
        {numOfPages.map((num) => (
            <div key={num}>
                <Col>
                    <Button variant="dark" onClick={()=>nextPage(num)}>{num}</Button>
                    </Col>
          </div>
        ))}
      </Row>
    </>
  );
};

export default Pagination;
