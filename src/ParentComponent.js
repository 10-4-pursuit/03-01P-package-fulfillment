// ParentComponent.js

import React, { useState } from 'react';
import PackageList from './Components/PackageList';
import PackageForm from './Components/PackageForm';
import { v4 as uuidv4 } from 'uuid';

const ParentComponent = () => {
  const [packages, setPackages] = useState([
    {
      id: uuidv4(),
      name: 'Package 1',
      description: 'Description for Package 1',
      category: 'Category 1',
      price: '100',
    },
    {
      id: uuidv4(),
      name: 'Package 2',
      description: 'Description for Package 2',
      category: 'Category 2',
      price: '200',
    },
  ]);

  const deletePackage = (packageId) => {
    setPackages(packages.filter(packageItem => packageItem.id !== packageId));
  };

  const updatePackage = (updatedPackage) => {
    // Update the state by mapping over the packages array
    setPackages(prevPackages => prevPackages.map(packageItem => {
      // If the ID of the current package matches the ID of the updated package, update it
      if (packageItem.id === updatedPackage.id) {
        return updatedPackage; // Return the updated package
      }
      return packageItem; // Return the unchanged package
    }));
  };  

  const addPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  return (
    <div>
      <PackageForm addPackage={addPackage} />
      <PackageList packages={packages} updatePackage={updatePackage} deletePackage={deletePackage} />
    </div>
  );
};

export default ParentComponent;
