import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import ProductDisplay from "./components/ProductDisplay";

const App = () => {
  const [products, setProducts] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // To add a product
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // To  delete a product
  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  //To  Edit a product
  const editProduct = (index, updatedProduct) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      <h1>Product Management</h1>
      <ProductForm addProduct={addProduct} />
      <ProductTable
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
      <ProductDisplay products={products} />
    </div>
  );
};

export default App;
