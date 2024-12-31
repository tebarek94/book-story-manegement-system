import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css"; // Import the CSS file for the component

function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/products", newProduct)
      .then((response) => {
        navigate("/home"); // Redirect to Home page after adding product
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div className="add-product-form">
      <h1>Add New Product</h1>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
