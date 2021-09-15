import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <nav>
          <div className="container">
            <div className="d-flex justify-between">
              <div className="logo">
                <Link to="/">P.M.S</Link>
              </div>
              <div className="nav-links">
                <Link to="/" className="btn box-shadow">
                  Product
                </Link>
                <Link to="/category" className="btn box-shadow">
                  Categories
                </Link>
                <Link to="/addproduct" className="btn box-shadow">
                  Add Product
                </Link>
                <Link to="/addcategory" className="btn box-shadow">
                  Add Category
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
