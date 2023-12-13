import React, { useState } from 'react'; // imports useState
import PackageForm from './components/PackageForm'; // imports PackageForm
import PackageList from './components/PackageList'; // imports PackageList
import { v4 as uuidv4 } from 'uuid'; // imports uuid id generator
import './App.css'; // imports App.css


// fuction for adding a package
function App() {
const [packages, setPackages] = useState([ // useState for packages array and setPackages function
  {
    id: uuidv4(), // generates a random id
    name: 'Doll', 
    description: 'Toys for kids',
    category: 'Toys',
    price: 9.99
  }
]);

const addPackage = (newPackageData) => {
  const newPackage = {
    id: uuidv4(), // generates a random id
    ...newPackageData //this is the spread operator that copies the new package data
  }
  setPackages([...packages, newPackage]); // makes a copy of the packages array and adds the new package
}

// function for updating a package
const updatePackage = (id, updatePackage) => {
  setPackages(packages.map(pkg => pkg.id === id ? {...pkg, ...updatePackage } : pkg)); // updates the package with the new data
  
}

// function for deleting a package
const deletePackage = (id) => {
  setPackages(packages.filter(pkg => pkg.id !== id)); // deletes the package
}

// returns the app
  return (
    <div className="container">
      { /* calls the PackageForm components addPackage updatePackage and deletePackage */}
      <h1>Package Tracker</h1>
      <PackageForm addPackage={addPackage} /> 
      <PackageList packages={packages} 
       updatePackage={updatePackage}
        deletePackage={deletePackage} />
    </div>
  );
}

export default App;
