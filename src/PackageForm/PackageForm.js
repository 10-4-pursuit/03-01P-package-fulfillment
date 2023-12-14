// Import necessary modules in this case from faker and react
import React from "react";
import { faker } from "@faker-js/faker";
import './PackageForm.css'

// Function PackageForm with props params opened up {addPackage, editPackage, id}
function PackageForm({ addPackage, editPackage, packageSelected, id }) {
    // useState to manage form inputs
    const [packageData, setPackageData] = React.useState({
        name: packageSelected?.name || "", 
        description: packageSelected?.description || "",
        category: packageSelected?.category || "",
        price: packageSelected?.price || "",
    });

    // Function to handle form submission
    function handleSubmit(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Generate a unique ID using faker if not provided
        const nextId = id || faker.string.uuid(5);

        // Check if addPackage prop is provided
        if (addPackage) {
            // Call addPackage with the new package data
            addPackage({ id: nextId, ...packageData });

            // Clear the form inputs
            setPackageData({
                name: "",
                description: "",
                category: "",
                price: "",
            });

        };

        // Check if editPackage prop is provided
        if (editPackage) {
            // Call editPackage with the updated package data
            editPackage({ id: nextId, ...packageData });

            // Clear the form inputs
            setPackageData({
                name: "",
                description: "",
                category: "",
                price: "",
            });
        };
    };

    // Function to handle input changes
    function handleChange(event) {
        // Extract the name and value from the input event
        const { name, value } = event.target;
        // Update the corresponding field in packageData state
        setPackageData({ ...packageData, [name]: value });
    };

    // JSX structure for the form
    return (
        <form onSubmit={handleSubmit}>
            { addPackage ? (<h2>Create New Package</h2>) : (<h2>Edit Package</h2>)}
            {/* Input fields for package details */}
            <label>
                <span>
                    Name:
                </span>
                <input
                    type="text"
                    name="name"
                    value={packageData.name}
                    onChange={handleChange}
                    required />
            </label>
            <label>
                <span>
                    Description:
                </span>
                <input
                    type="text"
                    name="description"
                    value={packageData.description}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                <span>
                    Category:
                </span>
                <input
                    type="text"
                    name="category"
                    value={packageData.category}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                <span>
                    Price:
                </span>
                <input
                    type="text"
                    name="price"
                    value={packageData.price}
                    onChange={handleChange}
                    required
                />
            </label>
            {/* Button to submit the form */}
            <button type="submit">Add Package</button>
        </form>
    )
};

// Export the PackageForm component
export default PackageForm;