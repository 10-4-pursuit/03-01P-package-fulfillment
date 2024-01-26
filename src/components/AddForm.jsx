import { Button, Form } from "react-bootstrap";
import { useSubmit } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { useContext, useState} from "react";





const AddForm = () => {



    const {addProduct} = useContext(ProductContext);

    const [newItem, setNewItem] = useState ({
        item:"", brand:"", price:"", color:"", description:""});
    
    const onInputChange = (e) => {
        setNewItem({...newItem, [e.target.name]: e.target.value})
    }

    const {item, brand, price, color, description} = newItem;

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(item, brand, price, color, description);
        
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Name *" name="item" value={item} onChange={(e) => onInputChange(e)} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBrand">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" placeholder="Brand" name="brand" value={brand} onChange={(e) => onInputChange(e)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" name="price" value={price} onChange={(e) => onInputChange(e)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicColor">
        <Form.Label>Color</Form.Label>
        <Form.Control type="text" placeholder="Color" name="color" value={color} onChange={(e) => onInputChange(e)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescripion">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" row={5} name="description" value={description} onChange={(e) => onInputChange(e)}  />
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default AddForm;
