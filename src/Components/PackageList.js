// PackageList.js
import './PackageForm.css';
import React from 'react';
import PackageItem from './PackageItem';

const PackageList = ({ packages, updatePackage, deletePackage }) => {
  return (
    <>
      <h2>Packages</h2>
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
    </>
  );
};

export default PackageList;
