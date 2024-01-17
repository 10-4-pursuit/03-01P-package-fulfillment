import React, { useState } from 'react';
import './App.css';
import PackageForm from './components/packageForm';
import PackageList from './components/PackageList';
import { nanoid } from 'nanoid'

function App() {
  // State to manage the list of packages
  const [packages, setPackages] = useState([
    {
      id: nanoid(6),
      name: "House of Leaves",
      description: "by Mark Danielewski",
      category: "Fiction",
      price: "20.99",
    }]);

    // Function to edit a package
    const editPackage = (packageToUpdate) => {
      const updatedPackage = [...packages];
      
      const packageIndex = updatedPackage.findIndex((pkg) => pkg.id === packageToUpdate.id);
  
      updatedPackage[packageIndex] = packageToUpdate;
  
      setPackages(updatedPackage);
    }
  
    // Function to delete a package
    const deletePackage = (id) => {
      const delPackage = packages.filter((pkg) => pkg.id !== id);
      setPackages(delPackage);
    }

  return (
    <div className="App">
      <header className="App-header">
        {/* PackageForm component for adding new packages */}
        <PackageForm setPackages={setPackages} packages={packages}/>
        <br/>
        {/* PackageList component to display the list of packages */}
        <PackageList packages={packages} 
        editPackage={editPackage} 
        deletePackage={deletePackage}/>
      </header>
    </div>
  );
}

export default App;
