import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const PackageForm = () => {
    const [PackageDetails, setPackageDetails] = useState({
        
    })
    
    return (
        <div>
            <h1>Hello</h1>
            <form name='PackageForm'>
                <label>
                    <span> 
                        ID: {nanoid(10)}
                    </span> 
                    <hr />
                </label>

                <label>
                    <span>
                        Package Name: 
                    </span>  
                    <input 
                    name='PackageName' 
                    type='text'
                    /> 
                    <hr />
                </label>

                <label>
                    <span>
                        Package Description:
                    </span>
                    <input 
                    name='PackageDescription' 
                    type='text' 
                    />
                    <hr />
                </label>

                <label>
                    <span>
                        Package Category:
                    </span>
                        <input 
                        name='PackageCategory' 
                        type='text' 
                        />
                    <hr />
                </label>
                
                <label>
                    <span>
                        Package Price:  
                    </span>
                    <input 
                    name='PackagePrice' 
                    type='number' 
                    />
                </label>
                
                
            </form>
        </div>
    )
}

export default PackageForm;