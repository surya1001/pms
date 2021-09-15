import React from "react";
import { Link } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const AddProduct = () => {
  return (
    <>
      <main id="main">
        <div className="form-container">
          <div className="d-flex justify-between">
            <Link to="/" className="btn main-btn box-shadow">
              <i className="fas fas fa-angle-double-left"></i> All Product
            </Link>
          </div>

          <div className="form-title text-center">
            <h2 className="text-dark text-center">Add New Product</h2>
          </div>

          <ProductForm />
        </div>
      </main>
    </>
  );
};

export default AddProduct;
