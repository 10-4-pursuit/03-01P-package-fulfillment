import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const PackageForm = ({ addPackage, editPackage, currentPackage }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (currentPackage) {
      setName(currentPackage.name);
      setDescription(currentPackage.description);
      setCategory(currentPackage.category);
      setPrice(currentPackage.price);
    }
  }, [currentPackage]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "price":
        setPrice(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (currentPackage) {
      const updatedPackage = {
        ...currentPackage,
        name,
        description,
        category,
        price,
      };
      editPackage(updatedPackage);
    } else {
      const newPackage = {
        id: uuidv4(),
        name,
        description,
        category,
        price,
      };

      addPackage(newPackage);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="name">
        <label htmlFor="name">Package Name</label>
        <input name="name" type="text" value={name} onChange={onInputChange} />
      </div>
      <div className="descrip">
        <label htmlFor="description">Package Description</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={onInputChange}
        />
      </div>
      <div className="category">
        <label htmlFor="category">Package Category</label>
        <input
          name="category"
          type="text"
          value={category}
          onChange={onInputChange}
        />
      </div>
      <div className="price">
        <label htmlFor="price">Package Price</label>
        <input
          name="price"
          type="number"
          value={price}
          onChange={onInputChange}
        />
      </div>
      <input
        type="submit"
        value={currentPackage ? "Edit Package" : "Add Package"}
      />
    </form>
  );
};

export default PackageForm;
