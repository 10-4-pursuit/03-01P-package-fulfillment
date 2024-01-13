
import React, { useState } from 'react';
import './PackageItem.css';

const PackageItem = ({ packageItem, updatePackage, deletePackage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPackage, setEditedPackage] = useState({ ...packageItem });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    updatePackage(editedPackage.id, editedPackage);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deletePackage(packageItem.id);
  };

  const handleChange = (e) => {
    setEditedPackage({ ...editedPackage, [e.target.name]: e.target.value });
  };

  return (
    <div className="package-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={editedPackage.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editedPackage.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={editedPackage.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={editedPackage.price}
            onChange={handleChange}
          />
          <div className="edit-buttons">
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <div> {packageItem.name} </div>
          <div> {packageItem.id} </div>
          <div> {packageItem.description} </div>
          <div> {packageItem.category} </div>
          <div> {packageItem.price} </div>
      
          <div className="edit-buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default PackageItem;
