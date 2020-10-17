import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";

const Pagination = ({ numOfPostPerPages, totalNoOfBooks, nextPage }) => {
  let numOfPages = [];

  let index = 1;
  while (index <= Math.ceil(totalNoOfBooks / numOfPostPerPages)) {
    numOfPages.push(index); 
    index++;
  }
  return (
    <>
      <Row>
        {numOfPages.map((num) => (
            <div key={num}>
                <Col>
                    <button onClick={()=>nextPage(num)}>{num}</button>
                    </Col>
          </div>
        ))}
      </Row>
    </>
  );
};

export default Pagination;
