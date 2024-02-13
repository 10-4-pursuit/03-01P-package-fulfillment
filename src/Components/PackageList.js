import React from "react";
import PackageItem from "./PackageItem";

export default function PackageList({ packages, updatePackage, deletePackage }) {
    return (
        <div className="package-list">
            {packages.map((packageItem) => (
                <PackageItem
                    key={packageItem.id}
                    packageItem={packageItem}
                    updatePackage={updatePackage}
                    deletePackage={deletePackage}
                />
            ))}
        </div>
    );
};