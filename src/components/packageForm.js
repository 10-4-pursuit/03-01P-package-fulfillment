import React, { useState } from 'react';
import { nanoid } from 'nanoid';


function PackageForm({ setPackages, packages }) {
    // State to manage the form data for a new package
    const [packageInfo, setPackageInfo] = useState({
      id: nanoid(6),
      name: "",
      description: "",
      category: "",
      price: "",
    });
  
    // Function to handle input changes in the form
    const handleInputChange = (e) => {
      const field = e.target.getAttribute('name');
      
      const formInfo = {
        ...packageInfo,
        [field]: e.target.value
      };

      setPackageInfo(formInfo);
    };
  
    // Function to add a new package
    const handleAddPackage = (e) => {
      e.preventDefault();

      setPackages((prevPackages) => [...prevPackages, packageInfo]);
      setPackageInfo({
        id: nanoid(6),
        name: "",
        description: "",
        category: "",
        price: "",
      });
    };
  

    return (
      <div>
        {/* Form for adding a new package */}
        <form className="form">
          {/* Input fields for package information */}
        <label>
          Name: 
          <input
            type="text"
            name="name"
            value={packageInfo.name}
            onChange={handleInputChange}
            placeholder="Enter package name"
          />
        </label>
        <hr/>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={packageInfo.description}
            onChange={handleInputChange}
            placeholder=" Enter package description"
          />
        </label>
        <hr/>

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={packageInfo.category}
            onChange={handleInputChange}
            placeholder="Enter package category"
          />
        </label>
        <hr/>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={packageInfo.price}
            onChange={handleInputChange}
            placeholder="Enter package price"
          />
        </label>
        <hr/>

        <button type="submit" onClick={handleAddPackage}>Add Package</button>
        </form>
      </div>
    );
};

export default PackageForm;