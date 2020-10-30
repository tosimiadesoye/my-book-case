import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col } from "react-bootstrap";

const Cart = ({ cart, setCart }) => {
  console.log(cart);
  const removeBook = (book) => setCart(cart.filter((item) => item !== book));

  return (
    <>
      {cart.map((item) => {
        const price = () =>
          item.book.saleInfo.saleability === "FOR_SALE"
            ? "£" + item.book.saleInfo.listPrice.amount
            : "£0.00";
         const countBook = () =>
           item.count === 1
             ? ""
             : `you have ${item.count} ${item.book.volumeInfo.title}s in your bookcase `
        
        return (
          <div className="description">
            <Row id={item.id}>
              <Col xs={6} md={{span: 4, offset:2}} className="ml-5 p-5">
                <h2 className="mt-5">{item.book.volumeInfo.title}</h2>
                <h6>by</h6>
                <h4>
                  {item.book.volumeInfo.authors &&
                  item.book.volumeInfo.authors.length === 1
                    ? item.book.volumeInfo.authors[0]
                    : item.book.volumeInfo.authors.concat(",")}
                </h4>
                 <p>
                  {item.book.volumeInfo.description}
                </p> 
                 
              </Col>
              <Col xs={6} md={{span:4, offset:2}} className="pl-5 mt-5">
                <img
                  class="d-flex align-items-start flex-column mt-5 ml-5"
                  src={item.book.volumeInfo.imageLinks.thumbnail}
                  alt="bookImages"
                />
            
                  <p className="mt-5 ml-5">{countBook()}</p>  
                <h2 className="mt-5 ml-5">{price()}</h2>

                <Button
                  variant="danger"
                  className="mt-5 ml-5"
                  onClick={() => removeBook(item)}
                >
                  remove
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
