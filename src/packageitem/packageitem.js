// Import necessary modules in this case from react and PackageForm
import React from "react";
import PackageForm from '../PackageForm/PackageForm';
import './PackageItem.css'

// Function PackageItem with props params opened up {packageSelected, editPackage, deletePackage}
function PackageItem({ packageSelected, editPackage, deletePackage }) {
    // Destructure package details
    const { id, name, description, category, price } = packageSelected;

    // useState to manage edit mode
    const [editMode, setEditMode] = React.useState(false);

    // Function to handle edit submission
    function editSubmit(packageData) {
        // Call the editPackage function with updated package data
        editPackage(packageData);
        // Exit edit mode
        setEditMode(false);
    };

    // Render PackageForm in edit mode
    if (editMode) {
        return (
            <PackageForm editPackage={editSubmit} id={id} packageSelected={packageSelected} />
        );
    };

    // Render package details and options
    return (
        <div>
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>ID: {id} </p>
            <p>Price: {price}</p>
            {/* Button to toggle edit mode */}
            <button className="edit-button" onClick={() => setEditMode(!editMode)}>Edit Package</button>
            {/* Button to delete the package */}
            <button className="delete-button" onClick={() => deletePackage(id) }>Delete Package</button>
        </div>
    );
};

// Export the PackageItem component
export default PackageItem;