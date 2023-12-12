import { useState } from 'react';
import './App.css';
import PackageForm from './PackageForm/PackageForm';

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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Package Management App</h1>
        <PackageForm addPackage={logData}/>
      </header>
    </div>
  );
}

export default App;
