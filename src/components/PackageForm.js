import React, { useState } from 'react';

function PackageForm({ editing, setEditing, currentPackage, setCurrentPackage, addPackage, updatePackage }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPackage({ ...currentPackage, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!currentPackage.name || !currentPackage.description || !currentPackage.category || !currentPackage.price) return;
    if (editing) {
      updatePackage(currentPackage.id, currentPackage);
    } else {
      addPackage(currentPackage);
    }
    setCurrentPackage({ id: null, name: '', description: '', category: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={currentPackage.name}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={currentPackage.description}
        onChange={handleInputChange}
      />
      <label>Category</label>
      <input
        type="text"
        name="category"
        value={currentPackage.category}
        onChange={handleInputChange}
      />
      <label>Price</label>
      <input
        type="text"
        name="price"
        value={currentPackage.price}
        onChange={handleInputChange}
      />
      <button>{editing ? 'Update' : 'Add'}</button>
      {editing && (
        <button onClick={() => setEditing(false)}>Cancel</button>
      )}
    </form>
  );
}

export default PackageForm;
