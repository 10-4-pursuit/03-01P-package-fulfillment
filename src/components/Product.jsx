import { ProductContext } from "../contexts/ProductContext";
import { useContext, useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";


const Product = ({ products }) => {
    const {deleteProduct} = useContext(ProductContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [products])
    

  return (
    <>
      <td>{products.item}</td>
      <td>{products.brand}</td>
      <td>{products.price}</td>
      <td>{products.color}</td>
      <td>{products.description}</td>
      <td>
        <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
        <button onClick={() => deleteProduct(products.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm  theProduct={products}/>
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

export default Product;
