// App.js
import React, { useState } from 'react';
import PackageForm from './PackageForm';
import PackageList from './PackageList';

const App = () => {
  const [packages, setPackages] = useState([]);

  const addPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  const updatePackage = (id, updatedPackage) => {
    const updatedPackages = packages.map((pkg) =>
      pkg.id === id ? updatedPackage : pkg
    );
    setPackages(updatedPackages);
  };

  const deletePackage = (id) => {
    const updatedPackages = packages.filter((pkg) => pkg.id !== id);
    setPackages(updatedPackages);
  };

  return (
    <div className= "App">
      <h1>Package Management App</h1>
      <PackageForm addPackage={addPackage} />
      <PackageList
        packages={packages}
        updatePackage={updatePackage}
        deletePackage={deletePackage}
      />
    </div>
  );
};

export default App;
