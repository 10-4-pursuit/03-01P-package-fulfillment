import React from "react";
import { faker } from "@faker-js/faker";

function PackageForm({ addPackage }) {
    const [packageData, setPackageData] = React.useState({
        name: "",
        description: "",
        category: "",
        price: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        const id = faker.string.uuid(5);

        addPackage({ id, ...packageData });

        setPackageData({
            name: "",
            description: "",
            category: "",
            price: "",
        });

    };

    function handleChange(event) {
        const { name, value } = event.target;
        setPackageData({ ...packageData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Package</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={packageData.name}
                    onChange={handleChange}
                    required />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={packageData.description}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={packageData.category}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Price:
                <input
                    type="text"
                    name="price"
                    value={packageData.price}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Add Package</button>
        </form>
    )
};

export default PackageForm;