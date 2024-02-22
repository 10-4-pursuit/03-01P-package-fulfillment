// PackageItem.js
import './PackageForm.css';
import React, { useState } from 'react';

const PackageItem = ({ packageItem, updatePackage, deletePackage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPackage, setEditedPackage] = useState({ ...packageItem });

  const handleUpdate = () => {
    updatePackage(editedPackage);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedPackage((prevEditedPackage) => ({
      ...prevEditedPackage,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="package-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedPackage.name}
            onChange={handleChange}
            placeholder="Enter package name"
          />
          <textarea
            name="description"
            value={editedPackage.description}
            onChange={handleChange}
            placeholder="Enter package description"
          />
          <input
            type="text"
            name="category"
            value={editedPackage.category}
            onChange={handleChange}
            placeholder="Enter package category"
          />
          <input
            type="text"
            name="price"
            value={editedPackage.price}
            onChange={handleChange}
            placeholder="Enter package price"
          />
        </>
      ) : (
        <div className="package-detail">
          <div className="package-name">{packageItem.name}</div>
          <div className="package-id">ID: {packageItem.id}</div>
          <div className="package-description">{packageItem.description}</div>
          <div className="package-category">{packageItem.category}</div>
          <div className="package-price">${packageItem.price}</div>
        </div>
      )}
      <div className="edit-delete-buttons">
        {isEditing ? (
          <button className="save" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="delete" onClick={() => deletePackage(packageItem.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PackageItem;
