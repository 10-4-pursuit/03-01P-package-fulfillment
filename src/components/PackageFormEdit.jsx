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

    return (
<h1>Package Form Edit</h1>


    )
}

export default PackageFormEdit;