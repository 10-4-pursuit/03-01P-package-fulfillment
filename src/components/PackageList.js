import React from 'react';
import PackageItem from './packageItem';

const PackageList = ({ packages, editPackage, deletePackage }) => {
    return (
        <div>
            List:
            {/* Mapping through the list of packages and rendering PackageItem component for each */}
            {
                packages.map(( pkg ) =>
                <PackageItem key={ pkg.id } currentPackage={ pkg } editPackage={editPackage}
                deletePackage={deletePackage}/>)
            }
        </div>
    )
}

export default PackageList;