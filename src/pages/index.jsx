import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button, Form, Card, Modal, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import Pagination from "react-paginate";
import { useHistory } from "react-router-dom";
import { getDataProduct } from "../stores/actions/product";

const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [paginate, setPaginate] = useState({ limit: 4, totalPage: 1 });
  const [search, setSearch] = useState("");

  const getAllProduct = async () => {
    try {
      const response = await dispatch(getDataProduct(search, "", "", page, paginate.limit));
      setProducts(response.value.data.data);
      setPaginate({ ...paginate, totalPage: response.value.data.pagination.totalPage });
    } catch (error) {
      Error(error.response);
    }
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    if (event.key === "Enter") {
      dispatch(getDataProduct(search, "", "", "", ""))
        .then((response) => {
          const newData = response.value.data.data;
          products = newData;
          history.push(`/?search=${searchValue}`);
        })
        .catch((error) => new Error(error.message));
    }
    setSearch(searchValue);
  };

  const handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    setPage(selectedPage, () => {
      getAllProduct();
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllProduct();
  }, [page, paginate.limit]);

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
            <InputGroup className="mb-1" onKeyPress={handleSearch}>
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
        <Row>
          <div className="mt-1 d-flex justify-content-center">
            {" "}
            <Pagination
              previousLabel={null}
              nextLabel={null}
              breakLabel={"..."}
              pageCount={paginate.totalPage}
              onPageChange={handlePagination}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              disabledClassName={"disabled"}
              activeClassName={"active"}
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Product;
