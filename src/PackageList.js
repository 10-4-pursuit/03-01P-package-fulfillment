import React from 'react';
import PackageItem from './PackageItem';

function PackageList({ packages, deletePackage, updatePackage }) { // Assuming you'll add updatePackage function later
  return (
    <div>
      {packages.map((pkg) => (
        // Change package prop to pkg to match the PackageItem component's expectation
        <PackageItem key={pkg.id} pkg={pkg} deletePackage={deletePackage} updatePackage={updatePackage} />
      ))}
    </div>
  );
}

export default PackageList;
