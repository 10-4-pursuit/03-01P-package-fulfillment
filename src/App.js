import React, { useState } from 'react';
import './App.css';
import PackageForm from './components/PackageForm';
import PackageTable from './components/PackageTable';

function App() {
  const initialFormState = { id: null, name: '', description: '', category: '', price: '' };

  const [packages, setPackages] = useState([]);
  const [currentPackage, setCurrentPackage] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addPackage = (pkg) => {
    pkg.id = packages.length + 1;
    setPackages([...packages, pkg]);
  };

  const deletePackage = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  const updatePackage = (id, updatedPackage) => {
    setEditing(false);
    setPackages(packages.map((pkg) => (pkg.id === id ? updatedPackage : pkg)));
    setCurrentPackage(initialFormState);
  };

  const editRow = (pkg) => {
    setEditing(true);
    setCurrentPackage({ id: pkg.id, name: pkg.name, description: pkg.description, category: pkg.category, price: pkg.price });
  };

  return (
    <div className="container">
      <h1 className="title">CRUD App with React</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2 className="sub-title">{editing ? 'Edit Package' : 'Add Package'}</h2>
          <PackageForm
            editing={editing}
            setEditing={setEditing}
            currentPackage={currentPackage}
            setCurrentPackage={setCurrentPackage}
            addPackage={addPackage}
            updatePackage={updatePackage}
          />
        </div>
        <div className="flex-large">
          <h2 className="sub-title">View Packages</h2>
          <PackageTable packages={packages} deletePackage={deletePackage} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
