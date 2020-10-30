import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";
import "./book.css";

const Book = (props) => {
   
  const {
    volumeInfo: {
      authors,
      title,
      description,
      imageLinks: { thumbnail },
    },
  } = props.book;
  const price = () => {
    if (props.book.saleInfo.saleability === "FOR_SALE") {
      return "£" + props.book.saleInfo.listPrice.amount;
    } else {
      return "£0.00";
    }
  };
 

  return (
    <div className='description ml-5 '> 
      <Row>
        <Col xs={6} md={5} className="ml-5">  
          <h2 className="mt-5">{title}</h2>
          <h6>by</h6>
          <h4>
            {authors && authors.length === 1 ? authors[0] : authors.concat(",")}
          </h4>
          <p>{description}</p>
        </Col>
        <Col xs={6} md={{span:4, offset:2}}> 
          <img
            className="d-flex align-items-start flex-column mt-5 ml-5"
            src={thumbnail}
            alt={title}
          />
          <h2 className="mt-5 ml-5">{price()}</h2>
        
          <Button
            variant="success"
            className="mt-5 ml-5"
            onClick={() => props.addBookToCart(title)}
          >
            add to cart
          </Button>
        </Col>
      </Row>

    
    </div>
  );
};

Book.propTypes = {
  volumeInfo: PropTypes.shape({ title: PropTypes.string.isRequired }),
  authors: PropTypes.string.isRequired,
  description: PropTypes.string,
  listPrice: PropTypes.shape({ amount: PropTypes.number.isRequired }),
  imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired }),
};
Book.defaultProps = {
  title: "No title…",
  authors: "No authors",
  description: "No description",
  amount: "No amount",
  thumbnail: "No image",
};
export default Book;
