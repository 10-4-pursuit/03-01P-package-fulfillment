import { useState } from 'react';
import './App.css';
import PackageForm from './PackageForm/PackageForm';
import PackageList from './Packagelist/PackageList';

function App() {
  const logData = (data) => {
    console.log(data)
  };

  const [packages, setPackages] = useState([
    {
      category: "Shoes",
      description: "Air Jordans",
      id: "42abb024-4139-4421-b4bd-e864b5595b5",
      name: "DJ Khalid Kicks",
      price: "$150.00"
  }
]);

function deletePackage(id) {
  const updatePackages = packages.filter((pkg) => pkg.id !== id);
  setPackages(updatePackages);
};

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Package Management App</h1>
        <PackageForm addPackage={logData}/>
        <PackageList packages={packages} deletePackage={deletePackage} />
      </header>
    </div>
  );
}

export default App;
