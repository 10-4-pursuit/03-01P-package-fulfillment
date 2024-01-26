import { Button, Form, Modal } from "react-bootstrap";
import { useSubmit } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { useContext, useState } from "react";

const EditForm = ({ theProduct }) => {
  const id = theProduct.id;
  const [item, setItem] = useState(theProduct.item);
  const [brand, setBrand] = useState(theProduct.brand);
  const [price, setPrice] = useState(theProduct.price);
  const [color, setColor] = useState(theProduct.color);
  const [description, setdescription] = useState(theProduct.description);

  const { updateProduct } = useContext(ProductContext);
  const updatedProduct = {id, item, brand, price, color, description}

  const handleSubmit = (e) => {
    e.preventDefault();
   updateProduct(id, updatedProduct)
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBrand">
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="Brand"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}

        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicColor">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          placeholder="Color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescripion">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          row={5}
          name="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
