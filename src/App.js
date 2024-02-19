import React, { useState } from 'react'; 
import PackageForm from './PackageForm';
import PackageList from './PackageList';
import './App.css';

function App() {
  const [packages, setPackages] = useState([]);
  const addPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };
  const updatePackage = (id, updatedPackage) => {
    setPackages(packages.map((pkg) => (pkg.id === id) ? { ...pkg, ...updatedPackage } : pkg));
  };
  const deletePackage = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id))
  };  
  
  return (
    <div>
      <PackageForm addPackage={addPackage}/>
      <PackageList 
        packages={packages}
        updatePackage={updatePackage}
        deletePackage={deletePackage} 
        />
    </div>
  );
}

export default App;
