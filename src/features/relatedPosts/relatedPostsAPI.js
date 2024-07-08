import axiosInstance from "../../utils/axios";


export const getRelatedPosts = async ({ tags, id }) => {
  const limit = 5;
  //tags_like=javascript&tags_like=react&id_ne=1&_limit=5
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const response = await axiosInstance.get(`/blogs?${queryString}`);

  return response.data;
};