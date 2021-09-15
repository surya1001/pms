import axios from "axios";

export const getCategory = async () => {
  return await axios.get("http://localhost:9000/api/category");
};

export const getCategoryById = async (id) => {
  return await axios.get(`http://localhost:9000/api/category/${id}`);
};

export const addCategory = async (name) => {
  return await axios.post("http://localhost:9000/api/category", { name });
};

export const updateCategory = async (id, name) => {
  return await axios.put(`http://localhost:9000/api/category/${id}`, { name });
};

export const deleteCategory = async (id) => {
  return await axios.delete(`http://localhost:9000/api/category/${id}`);
};
