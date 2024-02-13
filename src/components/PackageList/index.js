import PackageItem from "../PackageItem";

const PackageList = (props) => {
  const { packages, removePackage, selectPackageToEdit } = props;

  return (
    <div>
      <h2>Packages</h2>
      <div>
        {packages.length ? (
          packages.map((p, i) => 
            <PackageItem key={p.id} item={p} removePackage={removePackage} selectPackageToEdit={selectPackageToEdit} />
          )
        ) : (
          <span>No Packages Here!</span>
        )}
      </div>
    </div>
  );
};

export default PackageList;
