import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getCategory } from "../services/categoryservices";
import { getProductById, updateProduct } from "../services/productservces";

const UpdateProduct = () => {
  const history = useHistory();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategoryData = async () => {
    try {
      const res = await getCategory();
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductData = async (id) => {
    try {
      const { data } = await getProductById(id);
      setProducts(data);
      setName(data.name);
      setPrice(data.price);
      setCategory(data.category);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryData();
    getProductData(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !category) {
      return alert("Please fill all the required fields");
    }

    try {
      await updateProduct(id, name, price, category);
      alert("Product Updated Successfully");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main id="main">
        <div className="form-container">
          <div className="d-flex justify-between">
            <a href="/" className="btn main-btn box-shadow">
              <i className="fas fas fa-angle-double-left"></i> All Product
            </a>
          </div>

          <div className="form-title text-center">
            <h2 className="text-dark text-center">Update Product</h2>
          </div>
          <form onSubmit={handleSubmit} className="addproduct">
            <div className="form-group">
              <label htmlFor="name" className="text-light">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={products.name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Samsung a71"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price" className="text-light">
                Product Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={products.price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="999"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="text-light">
                Select Category
              </label>
              <select
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
              <button className="form-btn btn box-shadow">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default UpdateProduct;
