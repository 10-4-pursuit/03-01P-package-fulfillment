
import React, { useState } from 'react';
import './PackageForm.css';

const PackageForm = ({ addPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPackage = { ...formData, id: Date.now().toString() };
    addPackage(newPackage);
    
    setFormData({ name: '', description: '', category: '', price: '' });
  };

  return (
    <div>
      <h2>Create Package</h2>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Package Name"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
       
        <button type="submit">Add Package</button>
      </form>
    </div>
  );
};

export default PackageForm;
