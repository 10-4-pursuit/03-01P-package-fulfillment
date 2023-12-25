import React from "react";

// 
const PackageItem = ({ currentPackage }) => {

    // add edit and delete button which grabs the specific item the user selects via its unique id and shows another form with the current packages information, which is then updated via the spread operator.


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
        </div>  
    )
}

export default PackageItem;