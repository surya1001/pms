import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteCategory, getCategory } from "../services/categoryservices";

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = async () => {
    try {
      const response = await getCategory();
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategoryData = async (e, id) => {
    e.preventDefault();
    try {
      await deleteCategory(id);
      getCategoryData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <thead className="thead-dark">
        <tr>
          <th>Category Id</th>
          <th>Category Name</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {categories.map((category) => {
          return (
            <tr key={category._id}>
              <td>{category._id}</td>
              <td>{category.name}</td>
              <td>
                <Link
                  to={`/updatecategory/${category._id}`}
                  className="btn box-shadow"
                >
                  <i className="fas fa-edit"></i>
                </Link>
                <button
                  className="btn box-shadow"
                  onClick={(e) => deleteCategoryData(e, category._id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default CategoryTable;
