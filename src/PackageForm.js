// PackageForm.js
import React, { useState } from 'react';

function PackageForm({ addPackage }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPackage({ name, description, category, price });
    setName('');
    setDescription('');
    setCategory('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <button type="submit">Add Package</button>
    </form>
  );
}

export default PackageForm;
