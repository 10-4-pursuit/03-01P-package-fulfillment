import React, { useState } from 'react';
import PackageForm from './PackageForm';
import PackageList from './PackageList';

function App() {
  const [packages, setPackages] = useState([]);

  // Function to add a new package to the list
  const addPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  // Function to delete a package from the list
  const deletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  // Function to update package details in the list
  const updatePackage = (id, updatedPackage) => {
    setPackages(packages.map(pkg => pkg.id === id ? updatedPackage : pkg));
  };

  return (
    <div className="App">
      <h1>Package Management System</h1>
      <PackageForm addPackage={addPackage} />
      <PackageList packages={packages} deletePackage={deletePackage} updatePackage={updatePackage} />
    </div>
  );
}

export default App;
