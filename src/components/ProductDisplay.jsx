import React from "react";

const ProductDisplay = ({ products }) => {
  return (
    <div className="product-display">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          {product.imageUrl && (
            <img src={product.imageUrl} alt={product.name} />
          )}
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
