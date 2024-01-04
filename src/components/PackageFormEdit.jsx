import Creatures from "./Creatures";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { useNavigate, Link } from "react-router-dom";

function PackageFormEdit(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    const index = Creatures.map(function (e) {
        return e.id;
      }).indexOf(id);

      const handleSubmit = (e) => {
        e.preventDefault();
        
        let a = Creatures[index]
        a.Name = name;
        a.Description = description;
        a.Category = category;
        a.Price = price;
    
        history("/");
      }

      useEffect (() => {
        setName(localStorage.getItem("Name"));
        setDescription(localStorage.getItem("Description"));
        setId(localStorage.getItem("Id"));
        setCategory(localStorage.getItem("Category"));
        setPrice(localStorage.getItem("Price"));

      }, [])

    return (
        <div>
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              type="text"
              placeholder="Enter Name" value={name}
              required
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={description}
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
            Update
          </Button>
        </Form>
      </div>

    )
}

export default PackageFormEdit;