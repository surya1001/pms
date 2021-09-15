import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteProduct, getProduct } from "../services/productservces";

const ProductTable = () => {
  const history = useHistory();
  const [pageNumber, setPageNumber] = useState(0);
  const [totalpages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    try {
      const { data } = await getProduct(pageNumber);
      setProducts(data.products);
      setTotalPages(data.totalpages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductData();
  }, [pageNumber]);

  const deleteProductData = async (id) => {
    try {
      await deleteProduct(id);
      getProductData();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const prevBtn = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const nextBtn = () => {
    setPageNumber(Math.min(totalpages - 1, pageNumber + 1));
  };

  return (
    <>
      <h3 className="text-center" style={{ margin: "10px" }}>
        Page {`${pageNumber + 1} of ${totalpages}`}{" "}
      </h3>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category Id</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price} Rs.</td>
                <td>{product.category._id}</td>
                <td>{product.category.name}</td>

                <td>
                  <Link
                    to={`/updateproduct/${product._id}`}
                    className="btn box-shadow"
                  >
                    <i className="fas fa-edit"></i>
                  </Link>
                  <button
                    className="btn box-shadow"
                    onClick={() => deleteProductData(product._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={prevBtn} className="btn box-shadow">
          Previous Page
        </button>
        {[...Array(totalpages).keys()].map((index) => {
          return (
            <button
              onClick={() => setPageNumber(index)}
              key={index}
              className="btn box-shadow"
            >
              {index + 1}
            </button>
          );
        })}
        <button onClick={nextBtn} className="btn box-shadow">
          {" "}
          Next Page
        </button>
      </div>
    </>
  );
};

export default ProductTable;
