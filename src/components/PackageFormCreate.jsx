
import Creatures from "./Creatures";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { useNavigate, Link } from "react-router-dom";



function PackageFormCreate(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");


  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();

    let uniqueId = ids.slice(0,8);

    let a = name,
    b = description,
    c = category,
    d = price;

    Creatures.push({id: uniqueId, Name: a, Description: b, Category: c, Price: d});

    history("/");
  }

    return (
<div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            typeof="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Control
            typeof="text"
            placeholder="Enter Description"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Control
            typeof="text"
            placeholder="Enter Category"
            required
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Control
            typeof="text"
            placeholder="Enter Price"
            required
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>

    )
}

export default PackageFormCreate;