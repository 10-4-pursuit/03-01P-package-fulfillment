import { createContext, useState } from "react";
const { v4: uuidv4 } = require("uuid");

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [product, setProduct] = useState([
    {
      id: uuidv4(),
      item: "Headphones",
      brand: "Sony",
      price: "49.99",
      color: "Black",
      description: "surround sound, noise canceling",
    },
    {
      id: uuidv4(),
      item: "Computer",
      brand: "Bose",
      price: "99.99",
      color: "Black",
      description: "surround sound, noise canceling",
    },
    {
        id: uuidv4(),
        item: "Television",
        brand: "Samsung",
        price: "900",
        color: "Pink",
        description: "",
      }
  ]);

  const addProduct = (item, brand, price, color, description) => {
    setProduct([...product, {id:uuidv4(), item, brand, price, color, description}])
  }

  const deleteProduct = (id) => {
    setProduct(product.filter(products => products.id !== id))
  }

  const updateProduct = (id, updatedProduct) => {
    setProduct(product.map((product) => product.id === id ? updatedProduct : product))
  }

  return (
    <ProductContext.Provider value={{ product, addProduct, deleteProduct, updateProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
