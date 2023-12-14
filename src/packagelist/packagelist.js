// Import necessary modules in this case from react and PackageItem
import React from "react";
import PackageItem from '../PackageItem/PackageItem'

// Function PackageList with props params opened up {packages, editPackage, deletePackage}
function PackageList({ packages, editPackage, deletePackage }) {
    return (
        // Render a list of packages
        <div>
            {/* Heading for the package list */}
            <h2>Package List</h2>
            {
                packages.length === 0 ? (
                    <p>No entries yet</p>
                ) : (
                    /* Map over the packages array and render PackageItem for each package */
                    packages.map((pkg) => (
                        <PackageItem key={pkg.id} packageSelected={pkg} editPackage={editPackage} deletePackage={deletePackage} />
                    ))
                )
            }
        </div>
    );
};

// Export the PackageList component
export default PackageList;
