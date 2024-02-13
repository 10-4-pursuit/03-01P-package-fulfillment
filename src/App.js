import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import PackageForm from "./components/PackageForm";
import PackageList from "./components/PackageList";

function App() {
  const [packages, setPackages] = useState([]);
  const [editingIndex, setEditingindex] = useState(-1);

  const addPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  const removePackage = (id) => {
    const targetPackageIndex = packages.findIndex((p) => p.id === id);
    if (targetPackageIndex < 0) {
      return;
    }
    const updatedPackages = [
      ...packages.slice(0, targetPackageIndex),
      ...packages.slice(targetPackageIndex + 1),
    ];

    setPackages(updatedPackages);
  };

  const selectPackageToEdit = (id) => {
    const targetPackageIndex = packages.findIndex((p) => p.id === id);

    if (targetPackageIndex < 0) {
      return;
    }

    setEditingindex(targetPackageIndex);
  };

  const editPackage = (updatedPackage) => {
    const updatedPackages = [
      ...packages.slice(0, editingIndex),
      {
        ...packages[editingIndex],
        ...updatedPackage,
      },
      ...packages.slice(editingIndex + 1),
    ];

    setPackages(updatedPackages);
    setEditingindex(-1);
  };

  const currentPackage = packages[editingIndex] || null;

  return (
    <div className="App">
      <PackageForm
        addPackage={addPackage}
        editPackage={editPackage}
        currentPackage={currentPackage}
      />
      <PackageList
        packages={packages}
        removePackage={removePackage}
        selectPackageToEdit={selectPackageToEdit}
      />
    </div>
  );
}

export default App;
