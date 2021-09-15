import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCategory } from "../services/categoryservices";
import { addProduct } from "../services/productservces";

const ProductForm = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategoryData = async () => {
    try {
      const res = await getCategory();
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !category) {
      return alert("Please fill all the required fields");
    }

    try {
      await addProduct(name, price, category);
      alert("Product Added Successfully");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className="addproduct">
        <div className="form-group">
          <label htmlFor="name" className="text-light">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Samsung a71"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="text-light">
            Product Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="1999"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category" className="text-light">
            Select Category
          </label>
          <select
            key={category._id}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select Category</option>
            {categories.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <button className="form-btn btn box-shadow">Add Product</button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
