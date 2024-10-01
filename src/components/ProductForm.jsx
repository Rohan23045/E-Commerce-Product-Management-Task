import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "Electronics",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({
      name: "",
      price: "",
      description: "",
      category: "Electronics",
      imageUrl: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      />
      <select name="category" value={product.category} onChange={handleChange}>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
      </select>
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL (optional)"
        value={product.imageUrl}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
