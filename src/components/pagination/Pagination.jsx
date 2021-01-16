import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Pagination } from "react-bootstrap";

const Paginate = ({ numOfBooksPerPage, totalNoOfBooks, nextPage }) => {
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
                    <Pagination variant="dark" onClick={()=>nextPage(num)}>{num}</Pagination>
                    </Col>
          </div>
        ))}
      </Row>
    </>
  );
};

export default Paginate;
