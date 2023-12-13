import React from "react";
import PackageItem from '../PackageItem/PackageItem'

function PackageList({ packages, deletePackage }) {
    return (
        <div>
            <h2>Package List</h2>
            {packages.map((pkg) => (
                <PackageItem key={pkg.id} packageSelected={pkg} deletePackage={deletePackage} />
            ))}
        </div>
    );
};

export default PackageList;
