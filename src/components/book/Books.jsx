import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row } from "react-bootstrap";
import "./book.css";

const Book = ({ book, addBookToCart }) => {
  const [expandBook, setExpandBook] = useState(false);

  let {
    volumeInfo: {
      authors,
      title,
      description,
      imageLinks: { thumbnail },
    },
  } = book;

  let splitLength = description.length;
  let shortened = false;
  if (description.length === splitLength) shortened = true;

  description = description.substring(0, splitLength);
  const handleToggle = () => setExpandBook(!expandBook);

  const price = () => {
    if (book.saleInfo.saleability === "FOR_SALE") {
      return "£" + book.saleInfo.listPrice.amount;
    } else {
      return "£0.00";
    }
  };

  return (
    <div className="description ml-5">
      <Row>
        <Col xs={6} md={{ span: 3, offset: 2 }} className="mr-5">
          <h2 className="mt-5">{title}</h2>
          <h6>by</h6>
          <h4>
            {authors && authors.length === 1 ? authors[0] : authors.concat(",")}
          </h4>
          {expandBook ? (
            <div>{`${description}${shortened ? "..." : ""}`}</div>
          ) : null}
          {shortened && (
            <Button variant="dark" onClick={handleToggle}>
              {expandBook ? "remove Description" : "View Description"}
            </Button>
          )}
          <h2 className="mt-5 ml-5">{price()}</h2>
        </Col>
        <Col xs={6} md={{ span: 4, offset: 2 }} className="description m-5">
          <img
            className="d-flex align-items-start flex-column mt-5 ml-5"
            src={thumbnail}
            alt={title}
          />

          <Button
            variant="success"
            className="mt-5 ml-5"
            onClick={() => addBookToCart(title)}
          >
            add +
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
