import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Creatures from "./Creatures";
import React, { Fragment } from "react";
import { useNavigate, Link, BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import PackageItem from "./PackageItem";

function PackageList(){
    let history = useNavigate();
    const { id } = useParams();

    const handleEdit = (id, name, description, category, price) => {
        localStorage.setItem("Name", name);
        localStorage.setItem("Description", description);
        localStorage.setItem("Id", id);
        localStorage.setItem("Category", category);
        localStorage.setItem("Price", price);
      }
    
      const handleDelete = (id) => {
        const index = Creatures.map(function (e) {
          return e.id;
        }).indexOf(id);
        console.log(index);
        Creatures.splice(index, 1);

    history("/");
    }


    return (
    <Fragment>

      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Creatures && Creatures.length > 0
              ? Creatures.map((item) => {
                  return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <Link to={`/item/${item.id}`}>
                      <td>{item.Name}</td>
                      </Link>
          
                      <td>{item.Description}</td>
                      <td>{item.Category}</td>
                      <td>{item.Price}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button onClick={() => handleEdit(item.id, item.Name)}>EDIT</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data Available"}
          </tbody>
        </Table>
        <br></br>
        <Link className='d-grid gap-2' to={"/create"}>
          <Button size="lg">Create</Button>
        </Link>
      </div>
      {/* <Routes>
        <Route
          path="/item/:id"
          element={
            <PackageItem
            packageData={Creatures}
          />
          }
        />
      </Routes> */}
    </Fragment>
  );
}

export default PackageList