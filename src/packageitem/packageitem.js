import React from "react";

function PackageItem({ packageSelected, deletePackage }) {
    const { id, name, description, category, price } = packageSelected;

    return (
        <div>
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <button onClick={() => deletePackage(id) }>Delete</button>
        </div>
    );
};

export default PackageItem;