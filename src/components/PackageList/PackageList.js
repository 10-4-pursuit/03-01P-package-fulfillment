import React from "react";
import PackageItem from "../PackageItem/PackageItem";
import '../PackageList/PackageList.css'

// Rendering each package item
const PackageList = ({packages, editPackage, deletePackage}) => {
 
 return (
    <div className="package-list">
        <br />
        <h2> Inventory: </h2>
        {
            packages.map((eachPackage) => 
            <PackageItem key={eachPackage.id} 
            currentPackage={eachPackage} 
            editPackage={editPackage} 
            deletePackage={deletePackage} />)
        }
    </div>
 )
}

export default PackageList;