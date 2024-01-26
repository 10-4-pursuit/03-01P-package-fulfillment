import { useContext, useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { ProductContext } from "../contexts/ProductContext";
import Product from "./Product";
import AddForm from "./AddForm";

const ProductList = () => {
  const { product } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


useEffect(() => {
    handleClose()
}, [product])

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Product Database</h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              + Add Product
            </Button>{" "}
            <i className="material-icons"></i>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Color</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {product.map((products) => (
            <tr key={products.id}>
              <Product products={products} />
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductList;
