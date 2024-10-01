import React, { useState } from "react";

const ProductTable = ({ products, deleteProduct, editProduct }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editingProduct, setEditingProduct] = useState({});

  const startEditing = (index) => {
    setIsEditing(index);
    setEditingProduct(products[index]);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const saveEdit = (index) => {
    editProduct(index, editingProduct);
    setIsEditing(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>
              {isEditing === index ? (
                <input
                  type="text"
                  name="name"
                  value={editingProduct.name}
                  onChange={handleEditChange}
                />
              ) : (
                product.name
              )}
            </td>
            <td>
              {isEditing === index ? (
                <input
                  type="number"
                  name="price"
                  value={editingProduct.price}
                  onChange={handleEditChange}
                />
              ) : (
                product.price
              )}
            </td>
            <td>
              {isEditing === index ? (
                <textarea
                  name="description"
                  value={editingProduct.description}
                  onChange={handleEditChange}
                />
              ) : (
                product.description
              )}
            </td>
            <td>
              {isEditing === index ? (
                <select
                  name="category"
                  value={editingProduct.category}
                  onChange={handleEditChange}
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Books">Books</option>
                </select>
              ) : (
                product.category
              )}
            </td>
            <td>
              {isEditing === index ? (
                <>
                  <button onClick={() => saveEdit(index)}>Save</button>
                  <button onClick={() => setIsEditing(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEditing(index)}>Edit</button>
                  <button onClick={() => deleteProduct(index)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
