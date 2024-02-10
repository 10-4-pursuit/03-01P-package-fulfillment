import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './PackageForm.css';

export default function PackageForm({addPackage}) {
    const [packageData, setPackageData] = useState({
        id: "",
        name: "",
        description: "",
        category: "",
        price: "",
    });

    const handleChange = (ev) => {
        setPackageData({
            ...packageData, [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        addPackage({ ...packageData, id: uuidv4() });
        setPackageData({
          id: "",
          name: "",
          description: "",
          category: "",
          price: "",
        });

        return (
            <div className="form-div">
                <form className="package-form" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    value={packageData.name}
                    onChange={handleChange}
                    placeholder="Enter package name" />

                    <textarea 
                    name="Description"
                    value={packageData.description}
                    onChange={handleChange}
                    placeholder="Enter a description for your package..."
                    />

                    <input 
                    type="text"
                    name="category"
                    value={packageData.category}
                    onChange={handleChange}
                    placeholder="Enter a package category"
                    />

                    <input
                    type="text"
                    name="price"
                    value={packageData.value}
                    onChange={handleChange}
                    placeholder="Enter the package price"
                    />

                    <button disabled={!packageData.name} type="submit">Add</button>
                </form>
            </div>
        );
    };
};