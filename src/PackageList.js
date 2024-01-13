// PackageList.js
import React from 'react';
import PackageItem from './PackageItem';
import './PackageList.css';

const PackageList = ({ packages, updatePackage, deletePackage }) => {
  return (
    <div className="package-list">
      <h2>Package List</h2>
      {packages.map((pkg) => (
        <PackageItem
          key={pkg.id}
          packageItem={pkg}
          updatePackage={updatePackage}
          deletePackage={deletePackage}
        />
      ))}
    </div>
  );
};

export default PackageList;
