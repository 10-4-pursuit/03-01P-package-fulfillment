import React from "react";
import PackageList from "./PackageList";
import { useParams } from "react-router-dom";
import creaturesData from "./Creatures";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function PackageItem() {
  const { itemId }  = useParams();
  const userId = creaturesData;
 
  const creature =  creaturesData.find((creature) => creature.id === itemId);
console.log(creature);
  return (
   
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
          <thead>
      <h3>Package Details </h3>
      </thead>
      <tbody>
        <td>Name: {creature.Name} </td>
       <td>Description: {creature.Description}</td>
      <td>Category: {creature.Category}</td>
      <td>Price: {creature.Price}</td> 
      </tbody>
   </Table>
    </div>
   
  );
}

export default PackageItem;
