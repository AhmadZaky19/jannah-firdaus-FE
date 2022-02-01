import React from "react";
import { Container, Row, Col, Button, FormControl, Card, Modal, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const Product = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md={2}>
            <Button>Add product</Button>
          </Col>
          <Col md={10}>
            <InputGroup className="mb-1">
              <InputGroup.Text>
                <Search color="black" size={16} />
              </InputGroup.Text>
              <FormControl placeholder="Cari produk disini..." />
            </InputGroup>
          </Col>
        </Row>
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
