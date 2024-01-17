import React, { useState } from 'react';

function PackageItem({ currentPackage, editPackage, deletePackage }) {
    // State to manage whether the edit form is open or not
    const [editForm, setEdit] = useState(false);
    // State to manage the edited package data
    const [editedPackage, setEditPackage] = useState({ ...currentPackage });

    // Function to handle input changes in the edit form
    function handleEdit(e) {
        e.preventDefault();

        const field = e.target.name;

        setEditPackage({ ...editedPackage, [field]: e.target.value });
    }

    // Function to save the edited package
    function handleSave() {
        editPackage(editedPackage);

        setEdit(false);
    }

    return (
        <div className="item">
            {/* Displaying package information */}
            <br />
            <label>
                <span>ID: </span>{currentPackage.id}
            </label>

            <hr />
            <label>
                <span>Name: </span>{currentPackage.name}
            </label>
            
            <hr />
            <label>
                <span>Description: </span>{currentPackage.description}
            </label>
            
            <hr />
            <label>
                <span>Category: </span>{currentPackage.category}
            </label>
            
            <hr />
            <label>
                <span>Price: </span>${currentPackage.price}
            </label>

            <br />

            <div/>
            {/* Edit form when editForm state is true */}    
            {
                editForm ? (
                <form name='editForm'>
                {/* Input fields for editing package information */}
                <label>
                    <span> 
                        ID: 
                    </span> 
                    <hr />
                </label>

                <label>
                    <span>
                        Package Name: 
                    </span>  
                    <input onChange={handleEdit} 
                    name='name' 
                    value={editedPackage.name} 
                    type='text'/> 
                    <hr />
                </label>

                <label>
                    <span>
                        Package Description:
                    </span>
                    <input onChange={handleEdit} 
                    name='description' 
                    value={editedPackage.description} 
                    type='text' />
                    <hr />
                </label>

                <label>
                    <span>
                        Package Category:
                    </span>
                        <input onChange={handleEdit} 
                        name='category' 
                        value={editedPackage.category} 
                        type='text' />
                    <hr />
                </label>
                
                <label>
                    <span>
                        Package Price:  
                    </span>
                    <input onChange={handleEdit} 
                    type='number'
                    name='price' 
                    value={editedPackage.price} />
                </label>

                <button onClick={handleSave} name="save">
                    Save
                </button>
            </form>
                ) : (
                    <div>
                        {/* Buttons to edit or delete the package */}
                        <button name='edit' 
                        onClick={() => setEdit(true)} >
                            Edit
                        </button>

                        <button name='delete' 
                        onClick={() => deletePackage(currentPackage.id)} >
                            Delete
                        </button>
                    </div>
                )}
        </div>
    )
}

export default PackageItem;