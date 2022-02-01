import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card, Modal, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const Product = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="mt-4">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama Produk</Form.Label>
                <Form.Control type="text" placeholder="Nama produk..." />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Stok</Form.Label>
                <Form.Control type="text" placeholder="Stok produk..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Harga</Form.Label>
                <Form.Control type="text" placeholder="Harga produk..." />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col md={2}>
            <Button onClick={handleShow}>Add product</Button>
          </Col>
          <Col md={10}>
            <InputGroup className="mb-1">
              <InputGroup.Text>
                <Search color="black" size={16} />
              </InputGroup.Text>
              <Form.Control placeholder="Cari produk disini..." />
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
              <Button className="card__product--button--update" onClick={handleShow}>
                Update
              </Button>
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
