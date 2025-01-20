import { api } from "../axiosInstance";

export const getPost = () => {
  return api.get("/posts");
};

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

export const postData = (formPost) => {
  return api.post("/posts", formPost);
};
