import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getCategoryById, updateCategory } from "../services/categoryservices";

const UpdateCategory = () => {
  const { id } = useParams();
  const history = useHistory();

  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategoryData = async (id) => {
    try {
      const { data } = await getCategoryById(id);
      setCategories(data);
      setName(data.name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryData(id);
  }, [id]);

  const submithandler = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please fill the category name");
    }

    try {
      await updateCategory(id, name);
      alert("Category Updated successfully");
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
            <a href="/category" className="btn main-btn box-shadow">
              <i className="fas fas fa-angle-double-left"></i> All Category
            </a>
          </div>

          <div className="form-title text-center">
            <h2 className="text-dark text-center">Update Category</h2>
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
                defaultValue={categories.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button className="form-btn btn box-shadow">
                Update Category
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default UpdateCategory;
