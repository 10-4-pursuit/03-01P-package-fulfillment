// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PackageForm from './components/PackageForm/PackageForm';
import PackageList from './components/PackageList/PackageList';



function App() {
  const [packages, setPackage] = useState([
    {
      id: nanoid(10),
      name: "Beats",
      description: "By Dre",
      category: "Headphones",
      price:"55.99"
    }
  ]);

  const editPackage = (packageToUpdate) => {
    // copy of packages 
    const updatedPackage = [...packages];
    
    // finding the index of the package using the id
    const packageIndex = updatedPackage.findIndex((pkg) => pkg.id === packageToUpdate.id);

    updatedPackage[packageIndex] = packageToUpdate;

    setPackage(updatedPackage);
  }

  const deletePackage = (id) => {
    // filters all packages that dont match the id
    const delPackage = packages.filter((pkg) => pkg.id !== id);
    setPackage(delPackage);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="package-form-container">
          <PackageForm setPackage={setPackage} packages={packages} />
        </div>

        <div className="package-list-container">
          <PackageList packages={packages}  
          editPackage={editPackage} 
          deletePackage={deletePackage} />
        </div>
      </header>
    </div>
  );
}

export default App;
