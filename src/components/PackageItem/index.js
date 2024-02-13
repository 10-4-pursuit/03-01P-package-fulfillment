const PackageItem = ({ item, removePackage, selectPackageToEdit }) => {
  const { name, description, category, price, id } = item;

  return (
  <div>
<span> { name }</span>
<span> { description }</span>
<span> { category }</span>
<span> { price }</span>
<button onClick={() => removePackage(id)}>Remove</button>
<button onClick={() => selectPackageToEdit(id)}>Edit</button>
  </div>
  );
}

export default PackageItem;
