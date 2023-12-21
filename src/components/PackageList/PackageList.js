import React from "react";

const PackageList = ({packages}) => {
 
 return (
    <div>
        <br />
        List:
        <hr />
        id: {packages.id}
        <hr />
        name: {packages.name}
        <hr />
        description: {packages.description}
        <hr />
        category: {packages.category}
        <hr />
        price: {packages.price}
    </div>
 )
}

export default PackageList;