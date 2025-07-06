import axios from "axios";

const API_URL = "http://localhost:3000/posts"; // sequelize

const getAll = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(`${API_URL}/id/${id}`);
  return res.data;
};

const getPostByName = async (postName) => {
  const res = await axios.get(`${API_URL}/title/${postName}`);
  return res.data;
};

const deletePost = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(id)
  const res = await axios.delete(`${API_URL}/id/${id}`, {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const postService = {
  getAll,
  getById,
  getPostByName,
  deletePost,
};

export default postService;
