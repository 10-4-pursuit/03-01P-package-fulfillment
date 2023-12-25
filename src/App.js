// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PackageForm from './components/PackageForm/PackageForm';
import PackageList from './components/PackageList/PackageList';



function App() {
 const [packages, setPackage] = useState([]);



  return (
    <div className="App">
      <header className="App-header">
        <PackageForm setPackage={setPackage} packages={packages} />
        <PackageList packages={packages} />
      </header>
    </div>
  );
}

export default App;
