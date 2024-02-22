import React, { useState } from 'react';
import PackageForm from './Components/PackageForm';
import PackageList from './Components/PackageList';

function App() {
  const [packages, setPackages] = useState([]);

  const addPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  return (
    <div className="App">
      <h1>Package Management System</h1>
      <PackageForm addPackage={addPackage} />
      <PackageList packages={packages} />
    </div>
  );
}

export default App;
