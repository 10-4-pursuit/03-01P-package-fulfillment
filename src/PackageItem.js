import React, { useState } from 'react';
import './App.css';

function PackageItem({ pkg, updatePackage, deletePackage }) {
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [isEditingPrice, setIsEditingPrice] = useState(false);

    const [editedDescription, setEditedDescription] = useState(pkg.description);
    const [editedPrice, setEditedPrice] = useState(pkg.price);

    const handleUpdateClick = () => {
        updatePackage(pkg.id, { description: editedDescription, price: editedPrice });
        setIsEditingDescription(false);
        setIsEditingPrice(false);
    };

    const handleDeleteClick = () => {
        deletePackage(pkg.id);
};    
    return (
        <div>
            <p>ID: {pkg.id}</p>
            <p>NAME: {pkg.name}</p>
            <div>
                <label>DESCRIPTION:</label>
                {isEditingDescription ? (
                <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} autoFocus />
                ) : ( 
                <p  onClick={() => setIsEditingDescription(true)}>{pkg.description}</p>   
                )}    
            </div>     
                <p>CATEGORY: {pkg.category}</p>
            <div>
                <label>PRICE:</label>
                {isEditingPrice ? (
                <>    
                <input type="number" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} autoFocus /><br />
                </>
                ) : ( 
                <p onClick={() => setIsEditingPrice(true)}>{pkg.price}</p>     
                )}     
            </div>      
            <button onClick={handleUpdateClick} style ={{ color: 'green' }}>Update</button>
            <button onClick={handleDeleteClick} style={{ color: 'red' }}>Delete</button>
        </div>
    );
}


export default PackageItem;