import React from "react";
import PackageItem from "../PackageItem/PackageItem";

// Rendering each package item
const PackageList = ({packages, editPackage, deletePackage}) => {
 
 return (
    <div>
        List:
        {
            packages.map((eachPackage) => 
            <PackageItem key={eachPackage.id} currentPackage={eachPackage} editPackage={editPackage} deletePackage={deletePackage} />)
        }
    </div>
 )
}

export default PackageList;