import axios from "axios";

export const getProduct = async (pageNumber) => {
  return await axios.get(
    `http://localhost:9000/api/product?page=${pageNumber}`
  );
};

export const getProductById = async (id) => {
  return await axios.get(`http://localhost:9000/api/product/${id}`);
};

export const addProduct = async (name, price, category) => {
  return await axios.post("http://localhost:9000/api/product", {
    name,
    price,
    category,
  });
};

export const updateProduct = async (id, name, price, category) => {
  return await axios.put(`http://localhost:9000/api/product/${id}`, {
    name,
    price,
    category,
  });
};

export const deleteProduct = async (id) => {
  return await axios.delete(`http://localhost:9000/api/product/${id}`);
};
