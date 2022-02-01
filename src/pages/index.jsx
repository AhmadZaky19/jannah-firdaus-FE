import React from "react";
import { Container, Row, Button, Form, Card, Modal } from "react-bootstrap";

const Product = () => {
  return (
    <>
      <Container>
        <Row></Row>
        <Row className="card__section">
          <Card className="card__product">
            <Card.Img
              variant="top"
              className="card__product--img"
              src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            />
            <Card.Body className="card__product--desc">
              <Card.Title className="card__product--title">Product 1</Card.Title>
              <Card.Text className="card__product--stock">Stok 2</Card.Text>
              <Card.Text className="card__product--price">Rp. 10.000</Card.Text>
              <Button className="card__product--button--update">Update</Button>
              <Button variant="danger" className="card__product--button--delete">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="card__product">
            <Card.Img
              variant="top"
              className="card__product--img"
              src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            />
            <Card.Body className="card__product--desc">
              <Card.Title className="card__product--title">Product 1</Card.Title>
              <Card.Text className="card__product--stock">Stok 2</Card.Text>
              <Card.Text className="card__product--price">Rp. 10.000</Card.Text>
              <Button className="card__product--button--update">Update</Button>
              <Button variant="danger" className="card__product--button--delete">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="card__product">
            <Card.Img
              variant="top"
              className="card__product--img"
              src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            />
            <Card.Body className="card__product--desc">
              <Card.Title className="card__product--title">Product 1</Card.Title>
              <Card.Text className="card__product--stock">Stok 2</Card.Text>
              <Card.Text className="card__product--price">Rp. 10.000</Card.Text>
              <Button className="card__product--button--update">Update</Button>
              <Button variant="danger" className="card__product--button--delete">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="card__product">
            <Card.Img
              variant="top"
              className="card__product--img"
              src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            />
            <Card.Body className="card__product--desc">
              <Card.Title className="card__product--title">Product 1</Card.Title>
              <Card.Text className="card__product--stock">Stok 2</Card.Text>
              <Card.Text className="card__product--price">Rp. 10.000</Card.Text>
              <Button className="card__product--button--update">Update</Button>
              <Button variant="danger" className="card__product--button--delete">
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default Product;
