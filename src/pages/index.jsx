import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button, Form, Card, Modal, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { getDataProduct } from "../stores/actions/product";

const Product = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      const response = await dispatch(getDataProduct("", "", "", "", 4));
      setProducts(response.value.data.data);
    } catch (error) {
      Error(error.response);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tambah produk</Modal.Title>
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
            <Button onClick={handleShow}>Tambah produk</Button>
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
          {products.length > 0 ? (
            products.map((item) => {
              const number = item.price;
              const rupiah = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0
              }).format(number);
              const newItem = { ...item, price: rupiah };
              return (
                <Card className="card__product" key={newItem.id}>
                  <Card.Img
                    variant="top"
                    className="card__product--img"
                    src={
                      newItem.productImage
                        ? `${process.env.REACT_APP_URL_BACKEND}uploads/${newItem.productImage}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                  />
                  <Card.Body className="card__product--desc">
                    <Card.Title className="card__product--title">{newItem.productName}</Card.Title>
                    <Card.Text className="card__product--stock">Stok {newItem.stock}</Card.Text>
                    <Card.Text className="card__product--price">{newItem.price}</Card.Text>
                    <Button className="card__product--button--update" onClick={handleShow}>
                      Update
                    </Button>
                    <Button variant="danger" className="card__product--button--delete">
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <h1 className="text-center mb-5 pb-4">No Data</h1>
          )}
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default Product;
