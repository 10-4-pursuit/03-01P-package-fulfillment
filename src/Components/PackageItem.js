import React, { useEffect, useState } from "react";
import './PackageItem.css'

export default function PackageItem({ packageItem, updatePackage, deletePackage }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedPackage, setEditedPackage] = useState({ ...packageItem });

    const handleUpdate = () => {
        updatePackage(packageItem.id, editedPackage);
        setIsEditing(false);
    };

    const handleChange = (ev) => {
        ev.preventDefault();
        setEditedPackage({ ...editedPackage, [ev.target.name]: ev.target.value });
    };

    return (
        <div className="package-item">
            {isEditing ? (
                <div>
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
                    placeholder="Enter a package description"
                    />

                    <input
                    type="text"
                    name="category"
                    value={editedPackage.category}
                    onChange={handleChange}
                    placeholder="Enter a package category"
                    />

                    <input
                    type="text"
                    name="price"
                    value={editedPackage.price}
                    onChange={handleChange}
                    placeholder="Enter the package price"
                    />

                </div>
            ) : (
                <div className="package-detail">
                    <div className="package-name">{packageItem.name}</div>
                    <div className="package-id">{packageItem.id}</div>
                    <div className="package-description">{packageItem.description}</div>
                    <div className="package-category">{packageItem.category}</div>
                    <div className="package-price">{packageItem.price}</div>
                </div>
            )}
           <div className="edit-delete-buttons">
        {isEditing ? (
          <button className="save" onClick={() => handleUpdate()}>
            Save
          </button>
          ) : (
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button
          className="delete"
          onClick={() => deletePackage(packageItem.id)}
        >
          Delete
        </button>
      </div>
    </div>
    );
};