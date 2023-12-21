import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PackageForm from './components/PackageForm/PackageForm';
import PackageList from './components/PackageList/PackageList';
import PackageItem from './components/PackageItem/PackageItem';



function App() {
 const [packages, setPackage] = useState({});


  // function addPackage() {

  // }

  return (
    <div className="App">
      <header className="App-header">
        <PackageForm setPackage={setPackage} />
        <PackageList packages={packages} />
      </header>
    </div>
  );
}

export default App;
