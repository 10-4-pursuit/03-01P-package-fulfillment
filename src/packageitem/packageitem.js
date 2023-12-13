import React from "react";
import PackageForm from '../PackageForm/PackageForm';

function PackageItem({ packageSelected, editPackage, deletePackage }) {
    const { id, name, description, category, price } = packageSelected;

    const [editMode, setEditMode] = React.useState(false);

    function editSubmit(packageData) {
        editPackage(packageData);
        setEditMode(false);
    };

    if (editMode) {
        return (
            <PackageForm editPackage={editSubmit} id={id} />
        );
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>ID: {id} </p>
            <p>Price: {price}</p>
            <button onClick={() => setEditMode(!editMode)}>Edit Package</button>
            <button onClick={() => deletePackage(id) }>Delete</button>
        </div>
    );
};

export default PackageItem;