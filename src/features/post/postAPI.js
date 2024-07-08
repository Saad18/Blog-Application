import axiosInstance from "../../utils/axios";

export const getPost = async (id) => {
  const response = await axiosInstance.get(`/blogs/${id}`);

  return response.data;
};

export const updateLikes = async ({ id, likes }) => {
  const response = await axiosInstance.patch(`/blogs/${id}`, {
    likes: likes + 1,
  });

  return response.data;
};

export const toggleSaved = async ({ id, isSaved }) => {
  const response = await axiosInstance.patch(`/blogs/${id}`, {
    isSaved: !isSaved,
  });

  return response.data;
};
