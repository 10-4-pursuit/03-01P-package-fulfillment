// PackageForm.js
import './PackageForm.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PackageForm = ({ addPackage }) => {
  const initialPackageData = {
    id: '',
    name: '',
    description: '',
    category: '',
    price: '',
  };

  const [packageData, setPackageData] = useState(initialPackageData);

  const handleChange = (e) => {
    setPackageData((prevPackageData) => ({
      ...prevPackageData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPackage({ ...packageData, id: uuidv4() });
    setPackageData(initialPackageData);
  };

  return (
    <form className="package-form" onSubmit={handleSubmit}>
      {['name', 'description', 'category', 'price'].map((field) => (
        <input
          key={field}
          type={field === 'description' ? 'textarea' : 'text'}
          name={field}
          value={packageData[field]}
          onChange={handleChange}
          placeholder={`Enter package ${field}`}
        />
      ))}
      <button type="submit" disabled={!packageData.name}>
        Add
      </button>
    </form>
  );
};

export default PackageForm;

