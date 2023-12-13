import React from "react";

function PackageItem({ packageSelected, deletePackage }) {
    const { id, name, description, category, price } = packageSelected;

    return (
        <div>
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>ID: {id} </p>
            <p>Price: {price}</p>
            <button onClick={() => deletePackage(id) }>Delete</button>
        </div>
    );
};

export default PackageItem;