import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function PackageForm({ addPackage }) {
    const [newPackage, setNewPackage] = useState({
         id: uuidv4(),
         name: "",
         description: "",
         category: "",
         price: "",
    });

    const handleChange = (event) => {
    setNewPackage({ ...newPackage, [event.target.name]: event.target.value });
};

    const handleSubmit = (event) => {
    event.preventDefault();
    addPackage(newPackage);
    setNewPackage({
        id: uuidv4(),
        name: "",
        description: "",
        category: "",
        price: "",
    });
};

const { name, description, category, price } = newPackage;

return (
    <form onSubmit={handleSubmit}>
        Name<input type="text" name="name" value={name} onChange={handleChange} /><br />
        Description<input type="text" name="description" value={description} onChange={handleChange} /><br />
        Category<input type="text" name="category" value={category} onChange={handleChange} /><br />
        Price<input type="number" name="price" value={price} onChange={handleChange} /><br />
        <button type="submit">Add Package</button>
    </form>
    );
}

export default PackageForm;