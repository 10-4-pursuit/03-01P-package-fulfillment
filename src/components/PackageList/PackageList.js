import React from "react";
import PackageItem from "../PackageItem/PackageItem";

// Rendering each package item
const PackageList = ({packages}) => {
 



 return (
    <div>
        List:
        {
            packages.map((eachPackage) => <PackageItem key={eachPackage.id} currentPackage={eachPackage} />)
        }
        
    </div>
 )
}

export default PackageList;