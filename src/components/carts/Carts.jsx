import { useDispatch, useSelector } from "react-redux";

import Cart from "./../carts/Cart";
import { fetchPosts } from "../../features/posts/postsSlice";
import { useEffect } from "react";
import Loading from "../ui/Loading";
useSelector, useDispatch;

const Carts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && posts?.length === 0) {
    content = <div className="loading">No video found!</div>;
  }
  if (!isLoading && !isError && posts?.length > 0) {
    content = posts.map((post) => <Cart key={post.id} post={post} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default Carts;
