// PackageItem.js
import React, { useState } from 'react';

function PackageItem({ pkg, deletePackage }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(pkg.name);
  const [description, setDescription] = useState(pkg.description);
  const [category, setCategory] = useState(pkg.category);
  const [price, setPrice] = useState(pkg.price);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Update package details in state
    setIsEditing(false);
  };

  const handleDelete = () => {
    deletePackage(pkg.id);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{pkg.name}</h3>
          <p>{pkg.description}</p>
          <p>{pkg.category}</p>
          <p>{pkg.price}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default PackageItem;
