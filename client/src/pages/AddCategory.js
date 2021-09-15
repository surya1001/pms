import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { addCategory } from "../services/categoryservices";

const AddCategory = () => {
  const history = useHistory();
  const [name, setName] = useState("");

  const submithandler = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please fill the category name");
    }

    try {
      addCategory(name);
      alert("Category Added successfully");
      history.push("/category");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main id="main">
        <div className="form-container">
          <div className="d-flex justify-between">
            <Link to="/category" className="btn main-btn box-shadow">
              <i className="fas fas fa-angle-double-left"></i> All Category
            </Link>
          </div>

          <div className="form-title text-center">
            <h2 className="text-dark text-center">Add New Category</h2>
          </div>

          <form
            onSubmit={submithandler}
            className="addcategory"
            id="addcategory"
          >
            <div className="form-group">
              <label htmlFor="name" className="text-light">
                Category Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mobile"
              />
            </div>

            <div className="form-group">
              <button className="form-btn btn box-shadow">Add Category</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default AddCategory;
