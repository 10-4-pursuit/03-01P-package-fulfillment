import React, { useState } from "react";

// 
const PackageItem = ({ currentPackage, editPackage, deletePackage }) => {

    // add edit and delete button which grabs the specific item the user selects via its unique id and shows another form with the current packages information, which is then updated via the spread operator.

    const [editMode, setEditMode] = useState(false);
    const [editedPackage, setEditedPackage] = useState({...currentPackage});


    const handleEdit = (event) => {
        event.preventDefault();
        // Update the editedPackage state based on the changes to the input
        const field = event.target.name;
        setEditedPackage({ ...editedPackage, [field]: event.target.value});
    }

    const handleSave = () => {
        editPackage(editedPackage);

        setEditMode(false);
    }

    return (
        <div>
            <br />
            <hr />
                id: {currentPackage.id}
            <hr />
                name: {currentPackage.name}
            <hr />
                description: {currentPackage.description}
            <hr />
                category: {currentPackage.category}
            <hr />
                price: $ {currentPackage.price}
            <br />  

            {
                editMode ? (
                    <form name='editForm'>
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
                        <button onClick={() => setEditMode(true)} name="edit">
                            Edit
                        </button>

                        <button onClick={() => deletePackage(currentPackage.id)} name="delete">
                            Delete
                        </button>
                    </div>
                )}
        </div>  
    );
}

export default PackageItem;