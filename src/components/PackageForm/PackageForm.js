import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import '../PackageForm/PackageForm.css'

const PackageForm = ({ setPackage, packages }) => {
    const [packageDetails, setPackageDetails] = useState({
        id: nanoid(10),
        name: "",
        description: "",
        category: "",
        price:""
    }); 

    const handleInput = (event) => {
        const field = event.target.getAttribute('name');
        const formValues = {
            ...packageDetails,
            [field]: event.target.value
        };
        setPackageDetails(formValues);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPackage([...packages, packageDetails]);
        setPackageDetails({
            id: nanoid(10),
            name: "",
            description: "",
            category: "",
            price:""});
    }
    
    return (
        <div>
            <form name='PackageForm'>
                <label>
                    <span>
                        Package Name: 
                    </span>  
                    <input onChange={handleInput} 
                    name='name' 
                    value={packageDetails.name} 
                    type='text'/> 
                    <hr />
                </label>

                <label>
                    <span>
                        Package Description:
                    </span>
                    <input onChange={handleInput} 
                    name='description' 
                    value={packageDetails.description} 
                    type='text' />
                    <hr />
                </label>

                <label>
                    <span>
                        Package Category:
                    </span>
                        <input onChange={handleInput} 
                        name='category' 
                        value={packageDetails.category} 
                        type='text' />
                    <hr />
                </label>
                
                <label>
                    <span>
                        Package Price:  
                    </span>
                    <input onChange={handleInput} 
                    type='number'
                    name='price' 
                    value={packageDetails.price} />
                </label>
            </form>
            <button name='submit' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default PackageForm;