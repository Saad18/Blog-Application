import axiosInstance from "../../utils/axios";

const getPosts = async (queryString) => {
  const response = await axiosInstance.get(`/blogs?${queryString}`);


  return response.data;
};

export default getPosts;
