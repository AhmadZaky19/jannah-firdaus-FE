import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button, Form, Card, Modal, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import Pagination from "react-paginate";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  getDataProduct,
  deleteProduct,
  postProduct,
  updateProduct
} from "../stores/actions/product";

const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isUpdate, setIsUpdate] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState({
    data: null,
    show: false
  });
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [paginate, setPaginate] = useState({ limit: 4, totalPage: 1 });
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    id: "",
    productName: "",
    productImage: null,
    price: "",
    stock: ""
  });

  const target = useRef(data.productImage);

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
        .then((res) => {
          setProducts(res.value.data.data);
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

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(show2.data))
      .then(() => {
        dispatch(getDataProduct(search, "", "", page, paginate.limit)).then((res) => {
          setProducts(res.value.data.data);
          toast.success("Sukses menghapus produk");
          handleClose2();
        });
      })
      .catch(() => {
        toast.error("Tidak berhasil menghapus produk");
        handleClose2();
      });
  };

  const handleFile = (e) => {
    setData({ ...data, productImage: e.target.files[0] });
  };

  const handleChangeText = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handlePostProduct = (e) => {
    e.preventDefault();
    const { productName, productImage, price, stock } = data;
    const setData = {
      productName,
      productImage,
      price,
      stock
    };
    const formImage = new FormData();
    for (const item in setData) {
      formImage.append(item, setData[item]);
    }
    for (const data in setData) {
      if (!setData[data]) {
        toast.error("Semua kolom harus terisi");
        return false;
      }
    }
    dispatch(postProduct(formImage))
      .then(() => {
        dispatch(getDataProduct(search, "", "", page, paginate.limit)).then((res) => {
          setProducts(res.value.data.data);
        });
        toast.success("Berhasil menambah produk");
        handleClose1();
      })
      .catch((error) => {
        toast.error("Ukuran file gambar tidak lebih dari 100kb");
      });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const item in data) {
      formData.append(item, data[item]);
    }
    dispatch(updateProduct(data.id, formData))
      .then(() => {
        dispatch(getDataProduct(search, "", "", page, paginate.limit)).then((res) => {
          setProducts(res.value.data.data);
        });
        toast.success("Berhasil mengubah produk");
        handleClose1();
      })
      .catch((error) => {
        toast.error("Tidak berhasil mengubah produk");
      });
  };

  const handleClose1 = () => {
    setShow1(false),
      setData({
        productName: "",
        productImage: null,
        price: "",
        stock: ""
      });
  };
  const handleClose2 = () => setShow2({ data: null, show: false });
  const handleShow1 = () => {
    setShow1(true);
    setIsUpdate(false);
  };
  const handleShow2 = (id) => setShow2({ data: id, show: true });
  const handleShow3 = (item) => {
    setShow1(true);
    setIsUpdate(true);
    setData({
      id: item.id,
      productName: item.productName,
      productImage: item.productImage,
      price: item.price,
      stock: item.stock
    });
  };

  useEffect(() => {
    getAllProduct();
  }, [page, paginate.limit]);

  return (
    <>
      <Container className="mt-4">
        <ToastContainer />
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>{!isUpdate ? "Tambah produk" : "Ubah produk"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama Produk</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama produk..."
                  onChange={handleChangeText}
                  name="productName"
                  value={data.productName}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Gambar Produk</Form.Label>
                <Form.Control type="file" onChange={handleFile} name="productImage" ref={target} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Stok</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Stok produk..."
                  onChange={handleChangeText}
                  name="stock"
                  value={data.stock}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Harga produk..."
                  onChange={handleChangeText}
                  name="price"
                  value={data.price}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Batal
            </Button>
            <Button variant="primary" onClick={!isUpdate ? handlePostProduct : handleUpdateProduct}>
              {!isUpdate ? "Tambah produk" : "Ubah produk"}
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col md={2}>
            <Button onClick={handleShow1}>Tambah produk</Button>
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
                        ? `${process.env.REACT_APP_URL_BACKEND}/prod/${newItem.productImage}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                  />
                  <Card.Body className="card__product--desc">
                    <Card.Title className="card__product--title">{newItem.productName}</Card.Title>
                    <Card.Text className="card__product--stock">Stok {newItem.stock}</Card.Text>
                    <Card.Text className="card__product--price">{newItem.price}</Card.Text>
                    <Button
                      className="card__product--button--update"
                      onClick={() => handleShow3(item)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      className="card__product--button--delete"
                      onClick={() => handleShow2(newItem.id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <h1 className="text-center mt-5 pb-4">No Data</h1>
          )}
        </Row>
        <Modal show={show2.show} onHide={handleClose2} centered>
          <Modal.Body>
            <h3>Hapus produk?</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Tidak
            </Button>
            <Button variant="primary" onClick={handleDeleteProduct}>
              Ya
            </Button>
          </Modal.Footer>
        </Modal>
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
